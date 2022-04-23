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

let token = (SETTINGS && SETTINGS.TWITCH_DATA && SETTINGS.TWITCH_DATA.TOKEN) ? SETTINGS.TWITCH_DATA.TOKEN : null
let username = (SETTINGS && SETTINGS.TWITCH_DATA && SETTINGS.TWITCH_DATA.USERNAME) ? SETTINGS.TWITCH_DATA.USERNAME : null
let channel = (SETTINGS && SETTINGS.TWITCH_DATA && SETTINGS.TWITCH_DATA.CHANNEL) ? SETTINGS.TWITCH_DATA.CHANNEL : null

const attemptTwitchLogin = async () => {
	if (!token || !channel) return false

	let connectResult = await TwitchController.Connect(channel, token)
	if (!connectResult) {
    console.warn('Failed to connect with given channel name and oauth token. Please try again.')
    return false
  }

  return true
}

//  Asynchronous wait function
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));