# Dunkathon
## _or... How to make a big splash on Twitch_

[standard-image]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat-square
[standard-url]: http://standardjs.com/
[![standard][standard-image]][standard-url]

The "Dunkathon" is an event in which Twitch chat is monitored by a bot and cheers, subs, raids, or channel point redemptions can trigger a 'dunk tank' event in real time for the streamer. This event is a recurring one for [DrewTheBear on Twitch](http://twitch.tv/DrewTheBear) and using this repository, you can possibly do a similar event yourself.

## Project Parts

1. A website (in two parts) that can be loaded into the background of OBS or other broadcasting software to track dunks as they are triggered
2. A micro-controller program (intended for the Arduino platform) which allows a microservice to trigger a motor when desired

If you've never seen the event take place, it may be a bit confusing what this all does, so it is suggested you watch the stream and take part in a Dunkathon (or watch the VOD) to fully understand how this all works.

> Please note that all code contained within this repo is intended for research purposes, and
> I am not responsible for any damage caused by said code. This includes if you set up a
> Dunkathon and somehow end up pouring water on your keyboard or your phone. So be careful!

## Breakdown: How it works

- The streamer sits under a Dunk Tank (specifications on Youtube) in an area they don't mind getting water in
- In the Settings.js file, the stream name, bot account, and oauth are set
- In the Settings.js file, a dunk channel point redemption is set up, if one is to exist
- In OBS, the DunkathonBack.htm and DunkathonFront.htm files are included as a Browser source
- The Arduino is connected to a Ethernet Shield and the motor on the appropriate pins
- A live Ethernet cable is connected to the Ethernet Shield
- The motor is connected to a Dunk Tank flush valve
- The Arduino is loaded with the DunkTankController program and restarted, showing a connection
- The streamer begins streaming
- As cheers, subs, raids, and channel point redemptions come in, the DunkathonDisplay page stores dunks and sends requests to the DunkTankController when appropriate
- When the DunkTankController receives a dunk request, it pulls the flush valve which dumps water on the streamer
- If a dunk is redeemed but one already exists, the DunkathonFront page stores it off into a buffer and goes through the buffer in order

## Development

Want to contribute? Great! I'd love to hear your contributions and suggestions. Please email me at DrewTheBearTwitch@gmail.com with anything you'd like to say.

The development of this is entirely for my own use, but I'd like the repository to stay public in case anyone else wants to try setting something similar up. I'll be making a tutorial video once the entire process is complete and this repo will be linked from the video.

If you are attempting to use this code and run into any questions, please feel free to send me an email and I'll try to help you out.


## License

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.