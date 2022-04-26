const DunkChatDisplay = {
    create: () => {
        //  Create the main container
        let container = Container.create({
            id: "DunkDisplayChat",
            style: {
                width: "1600px",
                height: "900px"
            }
        });

        container.show = (show) => { container.style.display = show ? "block" : "none" }

        DunkChatDisplay.setOnChatMessage(container)

        return container
    },

    createChatEntry: (username, message) => {
        let entry = Container.create({
            id: "ChatEntryBox",
            style: {
                position: "relative",
                width: "1600px",
                display: "inline-flex",
            }
        })

        let nameLabel = Label.create({
            id: "NameLabel",
            style: {
                fontFamily: "Vesper Libre",
                fontSize: "20px",
                width: "300px",
                textAlign: "right",
                marginRight: "10px",
                color: "rgb(255, 200, 200)"
            },
            attributes: {
                value: username
            }
        })
        entry.appendChild(nameLabel)

        let messageLabel = Label.create({
            id: "MessageLabel",
            style: {
                fontFamily: "Vesper Libre",
                fontSize: "20px",
                width: "1300px",
                textAlign: "left",
                color: "rgb(255, 255, 255)"
            },
            attributes: {
                value: message
            }
        })
        entry.appendChild(messageLabel)

        return entry;
    },

    setOnChatMessage: (container) => {
        TwitchController.AddTwitchMessageCallback("PRIVMSG", (message) => {
            let messageParts = message.message.split(' ')

            //  Check for any cheers and remove them completely (to hide them from the streamer)
            for (let i = 0; i < messageParts.length; ++i) {
                if (CheckIfCheer(messageParts[i])) {
                    messageParts[i] = ""
                }
            }

            if (SETTINGS.IGNORE_USERS.includes(message.username)) return
            if ((message.username === SETTINGS.TWITCH_DATA.USERNAME.toLowerCase()) && (messageParts[0][0] === '#')) return

            //  Rejoin the message
            message.message = messageParts.join(" ")

            //  Add a chat entry to the display
            while (container.childNodes.length > 20) container.removeChild(container.childNodes[0])
            container.appendChild(DunkChatDisplay.createChatEntry(message.username, message.message));
            
            //  Print out the message to show we've received it
            //console.log("PRIVMSG: ", message);
        });
    },
}