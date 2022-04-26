//  The TwitchJS library requires that these variables be named "token" and channel"
//  You can generate a token here: https://twitchapps.com/tmi/
let token = (SETTINGS && SETTINGS.TWITCH_DATA && SETTINGS.TWITCH_DATA.TOKEN) ? SETTINGS.TWITCH_DATA.TOKEN : null;
let username = (SETTINGS && SETTINGS.TWITCH_DATA && SETTINGS.TWITCH_DATA.USERNAME) ? SETTINGS.TWITCH_DATA.USERNAME : null
let channel = (SETTINGS && SETTINGS.TWITCH_DATA && SETTINGS.TWITCH_DATA.CHANNEL) ? SETTINGS.TWITCH_DATA.CHANNEL : null;

let LoadSiteContent = async () => {
  loadSiteMainArea();
	attemptAutoLogin();
};

let DUNK_CHAT_DISPLAY = null;

let loadSiteMainArea = () => {
	//  The SiteHeader which will be attached to the top of the screen and persists across all pages
	DUNK_CHAT_DISPLAY = DunkChatDisplay.create();
	document.body.appendChild(DUNK_CHAT_DISPLAY);
};

let attemptAutoLogin = async () => {
	if (!token || !channel) { return; }

	let connectResult = await TwitchController.Connect(channel, token);
	if (!connectResult) { console.warn("Failed to connect with given channel name and oauth token. Please try again."); return; }

	//  Move to the next program state
	DUNK_CHAT_DISPLAY.show(connectResult);
};