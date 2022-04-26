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

//  Elements to grab
var NextDunkTimerArea = null
var DunkBufferCountArea = null
var DunkBufferCountLabel = null
var DunkIncomingLabel = null
var DunkingNowLabel = null
var DunkIncomingShown = false

//  When the next dunk will occur according to the controller
var MillisUntilNextDunk = -1
var DunkathonPause = false
var TimerUpdateInterval = null

const SetNextDunkTime = (timerSeconds) => {
  //  Set the milliseconds until the next dunk
  MillisUntilNextDunk = (timerSeconds * 1000)

  //  Show the Next Dunk timer
  if (NextDunkTimerArea) {
    NextDunkTimerArea.setTimerValue(timerSeconds)
    NextDunkTimerArea.show()
  }

  TwitchController.SendChatMessage(SETTINGS.TWITCH_DATA.CHANNEL, "# Dunk Timer Started: " + timerSeconds.toString() + " seconds")
}

const CreateTimerInterval = () => {
  const intervalTime = 50
  setInterval(() => {
    if (MillisUntilNextDunk < 0) return
    if (DunkathonPause) return

    //  Subtract the time that has gone by and check for the timer running out
    MillisUntilNextDunk -= intervalTime

    if (MillisUntilNextDunk <= 0) {
      MillisUntilNextDunk = -1
      //  Hide the "Next Dunk Timer" area
      if (NextDunkTimerArea) {
        NextDunkTimerArea.hide()
        NextDunkTimerArea.setTimerValue(0)
      }

      //  Show DUNKING NOW message and call to trigger the dunk, then call the dunk callback
      DisplayDunkingNow()
      PostOffice.TriggerDunk()
      DunkCallback()
      return
    }
    else if (MillisUntilNextDunk <= 5000 && !DunkIncomingShown) {
      DisplayDunkIncoming()
    }

    if (NextDunkTimerArea) NextDunkTimerArea.setTimerValue(MillisUntilNextDunk / 1000)
  }, intervalTime)
}

const SetDunkBufferCount = (dunkBufferCount) => {
  if (dunkBufferCount <= 1) DunkBufferCountArea.hide()
  else DunkBufferCountArea.show()

  DunkBufferCountArea.setBufferValue(dunkBufferCount)
}

const LoadDunkDisplay = () => {
  LoadDunkBackDisplay();

  var siteContent = document.getElementById('SiteContent')
  CreateDunkTracker(siteContent)
  
  SetDunkBufferCount(0)
  CreateTimerInterval();
}

const CreateDunkTracker = (container) => {
  var dunkTracker = Container.create({
    id: "DunkTracker",
    style: {
      width: "392px",
      height: "718px",
      position: "absolute",
      top: "1px",
      left: "1px"
    }
  })
  container.appendChild(dunkTracker)

  //  NEXT DUNK TIMER
  NextDunkTimerArea = Container.create({
    id: "NextDunkTimerArea",
    style: {
      width: "270px",
      height: "26px",
      borderRadius: "4px",
      backgroundColor: "rgb(151, 87, 247)",
      border: "1px solid rgb(200, 200, 200)",
      margin: "6px auto auto auto",
      display: "none"
    }
  })
  NextDunkTimerArea.show = () => { NextDunkTimerArea.style.display = "flex" }
  NextDunkTimerArea.hide = () => { NextDunkTimerArea.style.display = "none" }
  dunkTracker.appendChild(NextDunkTimerArea)

  var nextDunkInLabel = Label.create({
    id: "NextDunkInLabel",
    style: {
      position: "absolute",
      left: "65px",
      top: "6px",
      textAlign: "left",
      fontFamily: "Righteous",
      fontSize: "20px",
    },
    attributes: {
      value: "Next Dunk In:"
    }
  })
  NextDunkTimerArea.appendChild(nextDunkInLabel)

  var dunkTimerLabel = Label.create({
    id: "DunkTimerLabel",
    style: {
      position: "absolute",
      left: "163px",
      top: "6px",
      textAlign: "right",
      width: "160px",
      height: "20px",
      fontFamily: "Righteous",
      fontWeight: "400",
      fontSize: "20px",
    },
  })
  NextDunkTimerArea.appendChild(dunkTimerLabel)

  //  Function to set the "Next Dunk" timer label
  NextDunkTimerArea.setTimerValue = (dunkTimerSeconds) => {
    if (!dunkTimerLabel) return
    dunkTimerLabel.setValue((dunkTimerSeconds === 0) ? "" : (dunkTimerSeconds.toFixed(1) + " seconds"))
  }

  //  DUNK BUFFER COUNTER
  DunkBufferCountArea = Container.create({
    id: "DunkBufferCountArea",
    style: {
      position: "absolute",
      left: "338px",
      top: "0px",
      minWidth: "30px",
      height: "26px",
      borderRadius: "4px",
      backgroundColor: "rgb(50, 168, 82)",
      border: "1px solid rgb(200, 200, 200)",
      margin: "6px auto auto auto",
      display: "none"
    }
  })
  DunkBufferCountArea.show = () => { DunkBufferCountArea.style.display = "flex" }
  DunkBufferCountArea.hide = () => { DunkBufferCountArea.style.display = "none" }
  dunkTracker.appendChild(DunkBufferCountArea)

  var dunkBufferCountLabel = Container.create({
    id: "DunkBufferCountLabel",
    style: {
      textAlign: "right",
      fontFamily: "Righteous",
      fontWeight: "400",
      fontSize: "20px",
      margin: "0px 6px 0px 4px"
    },
  })
  DunkBufferCountArea.appendChild(dunkBufferCountLabel)
  DunkBufferCountArea.setBufferValue = (bufferValue) => { dunkBufferCountLabel.innerHTML = "+" + (bufferValue - 1).toString() }

  //  Dunk Status Label Container
  var dunkStatusLabelContainer = Container.create({
    id: "DunkStatusLabelContainer",
    style: {
      width: "100%",
      height: "100%",
      position: "absolute",
      left: "0px",
      top: "0px"
    }
  })
  dunkTracker.appendChild(dunkStatusLabelContainer)

  //  DUNK INCOMING
  DunkIncomingLabel = Container.create({
    id: "DunkIncomingLabel",
    style: {
      position: "relative",
      left: "-20px",
      top: "620px",
      textAlign: "center",
      backgroundImage: "url(./Images/DunkIncoming.png)",
      width: "434px",
      height: "69px",
      display: "none",
      transform: "scale(0.7)",
      margin: "0px auto 0px auto"
    }
  })
  DunkIncomingLabel.show = () => { DunkIncomingLabel.style.display = "flex" }
  DunkIncomingLabel.hide = () => { DunkIncomingLabel.style.display = "none" }
  dunkStatusLabelContainer.appendChild(DunkIncomingLabel)

  //  DUNKING NOW
  DunkingNowLabel = Container.create({
    id: "DunkingNowLabel",
    style: {
      position: "absolute",
      left: "0px",
      top: "620px",
      textAlign: "center",
      backgroundImage: "url(./Images/DunkingNow.png)",
      width: "398px",
      height: "70px",
      display: "none",
      transform: "scale(0.7)",
      margin: "0px auto 0px auto"
    }
  })
  DunkingNowLabel.show = () => { DunkingNowLabel.style.display = "flex" }
  DunkingNowLabel.hide = () => { DunkingNowLabel.style.display = "none" }
  dunkStatusLabelContainer.appendChild(DunkingNowLabel)
}

const DisplayDunkIncoming = async () => {
  DunkIncomingShown = true
  while (true) {
    DunkIncomingLabel.show()
    await delay(300)
    DunkIncomingLabel.hide()
    await delay(300)
    if ((MillisUntilNextDunk <= 1000) || !DunkIncomingShown) break
  }
}

const DisplayDunkingNow = async () => {
  DunkingNowLabel.show()
  await delay(3000)
  DunkingNowLabel.hide()
  DunkIncomingShown = false
}