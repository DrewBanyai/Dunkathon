/*
    Copyright 2022 Drew Banyai

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
*/

//  How many of each interaction you need to trigger a dunk
const BITS_PER_DUNK = 100
const RAID_USERS_REQUIRED_FOR_DUNK = 3
const SECONDS_TO_NEXT_DUNK = { MIN: 20, MAX: 40 }

//  A list of people who've raided already (to make sure people don't try continuously raiding using a group)
var RaidStreamers = []

//  The dunk buffer data and method for creating a dunk buffer entry
var DunkathonEnded = false
var DunkBuffer = 0
var DunkTypesCollected = {}
var DunkBuffer = []
var ExpendedDunks = []

const GetNextDunkDelay = () => { return (Math.floor((Math.random() * (SECONDS_TO_NEXT_DUNK.MAX - SECONDS_TO_NEXT_DUNK.MIN)) + SECONDS_TO_NEXT_DUNK.MIN)) }

const AddDunkBufferEntry = (usernameList, dunkMethod) => {
  console.log("AddDunkBufferEntry - ", usernameList, dunkMethod)
  //  If we are starting from not having a dunk loaded, begin a dunk timer
  if (DunkBuffer.length === 0) SetNextDunkTime(GetNextDunkDelay())

  DunkBuffer.push({ usernameList: usernameList, dunkMethod: dunkMethod })
  SetDunkBufferCount(DunkBuffer.length)
}

const DunkCallback = () => {
  var dunkCompleted = DunkBuffer.splice(0, 1)[0]
  SetDunkBufferCount(DunkBuffer.length)
  if (DunkBuffer.length > 0) { SetNextDunkTime(GetNextDunkDelay()) }

  TwitchController.SendChatMessage(SETTINGS.TWITCH_DATA.CHANNEL, "DUNKED by [" + dunkCompleted.usernameList.join(', ') + "]" + " ~ " + dunkCompleted.dunkMethod)
  
  ExpendedDunks.push(dunkCompleted)
  if (!DunkTypesCollected.hasOwnProperty(dunkCompleted.dunkMethod)) DunkTypesCollected[dunkCompleted.dunkMethod] = 0
  DunkTypesCollected[dunkCompleted.dunkMethod] += 1
}

//  The current cheer value data (you collect cheers until the threshold is met, then release a dunk with all names of contributors)
var CheersCollected = []
const AddCheersCollectedEntry = (username, cheerValue) => {
  CheersCollected.push({ Username: username, CheerValue: cheerValue })

  //  Determine if there are any cheer dunks to claim
  var cheerTotal = 0
  for (var i = 0; i < CheersCollected.length; ++i) { cheerTotal += CheersCollected[i].CheerValue }
  var cheerDunks = Math.floor(cheerTotal / BITS_PER_DUNK)

  //  For each cheer dunk, find all contributors
  if (cheerDunks > 0) {
    var cheerContributors = []
    var cheerRemoval = BITS_PER_DUNK
    for (var i = 0; (i < CheersCollected.length) && (cheerDunks > 0);) {
      if (CheersCollected[i].CheerValue <= cheerRemoval) {
        cheerRemoval -= CheersCollected[i].CheerValue
        if (!cheerContributors.includes(CheersCollected[i].Username)) cheerContributors.push(CheersCollected[i].Username)
        CheersCollected.splice(i, 1)
      }
      else {
        CheersCollected[i].CheerValue -= cheerRemoval
        cheerRemoval = 0
        if (!cheerContributors.includes(CheersCollected[i].Username)) cheerContributors.push(CheersCollected[i].Username)
      }

      if (cheerRemoval <= 0) { 
        AddDunkBufferEntry(cheerContributors, "Cheer")
        cheerContributors = []
        cheerDunks -= 1
        cheerRemoval = BITS_PER_DUNK
      }
    }
  }
}

const LoadSiteContent = async () => {
  if (!(await attemptTwitchLogin())) return
  
  //  Handle Cheers, Subs, and Raids
  if (DunkathonEnded === false) {
    TwitchController.AddTwitchMessageCallback("CHEER", async (message) => { AddCheersCollectedEntry(message.username, message.tags.bits) })
    TwitchController.AddTwitchMessageCallback("SUBSCRIPTION", async (message) => { for (var i = 0; i < 2; ++i) AddDunkBufferEntry([ message.username ], "Subscription") })
    TwitchController.AddTwitchMessageCallback("RESUBSCRIPTION", async (message) => { for (var i = 0; i < 2; ++i) AddDunkBufferEntry([ message.username ], "Resubscription") })
    TwitchController.AddTwitchMessageCallback("SUBSCRIPTION_GIFT", async (message) => { for (var i = 0; i < 2; ++i) AddDunkBufferEntry([ message.username ], "Gift Subscription") })
    TwitchController.AddTwitchMessageCallback("RAID", async (message) => {
      if (message.parameters.viewerCount < RAID_USERS_REQUIRED_FOR_DUNK) return
      if (RaidStreamers.includes(message.username)) return
      AddDunkBufferEntry([ message.username ], "Raid")
      RaidStreamers.push(message.username)
    })
  }

  //  Handle regular messages
  TwitchController.AddTwitchMessageCallback("PRIVMSG", async (message) => {
    //  If a viewer uses the "Dunk Me" channel point reward, fire off a dunk
    if (message.tags && message.tags.customRewardId && (DunkathonEnded === false)) {
      if (SETTINGS.REWARD_ID_LINKS[message.tags.customRewardId]) {
        switch (SETTINGS.REWARD_ID_LINKS[message.tags.customRewardId]) {
          case "Dunk Me": for (var i = 0; i < 1; ++i) { AddDunkBufferEntry([ message.username ], "Channel Point") } break
        }
      }
    }

    //  If a viewer asks what the dunkathon is, point them to an explanation
    const messageParts = message.message.toLowerCase().split(' ')
    switch (messageParts[0]) {
      case "!dunkathon":
        TwitchController.SendChatMessage(SETTINGS.TWITCH_DATA.CHANNEL, "For an explanation of the Dunkathon event, click here: https://github.com/DrewBanyai/Dunkathon/blob/main/README.md")
        break

      case "!dunkstart":
        if (DunkathonEnded == true) {
          DunkathonEnded = false
          TwitchController.SendChatMessage(SETTINGS.TWITCH_DATA.CHANNEL, "The Dunkathon is back on! Cheers, subs, and raids will add to the dunk buffer.")
        }
        if (message.username === channel) DunkathonPause = false
        break

      case "!dunkstop":
        if (message.username === channel) DunkathonPause = true
        break

      case "!dunkend":
        if (message.username === channel) {
          DunkathonEnded = true
          TwitchController.SendChatMessage(SETTINGS.TWITCH_DATA.CHANNEL, "That concludes the Dunkathon! Any further cheers, subs, or raids will not add to the dunk buffer. Thank you everyone for being a part of this!")
        }
        break

      case "!dunktrigger":
        if ((message.username === channel) && (DunkathonEnded === false)) AddDunkBufferEntry([ message.username ], "Streamer Trigger")
        break

      case "!dunkcount":
        var dunkTypeCounts = []
        dunkTypeKeys = Object.keys(DunkTypesCollected)
        for (var i = 0; i < dunkTypeKeys.length; ++i) dunkTypeCounts.push(DunkTypesCollected[dunkTypeKeys[i]].toString() + " " + dunkTypeKeys[i] + "s")
        dunkTypeCounts = (dunkTypeKeys.length > 0) ? (dunkTypeCounts.join(", ") + ". ") : ""

        TwitchController.SendChatMessage(SETTINGS.TWITCH_DATA.CHANNEL, "There have been " + ExpendedDunks.length + " dunks so far this stream. " + dunkTypeCounts + "Keep 'em coming!")
        break
    }
  })

  LoadDunkDisplay()
}