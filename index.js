const Discord = require("discord.js");
const Client = new Discord.Client({
    intents: []
});

Client.on("ready", () => {
    console.log("bot connecté");
});







Client.login("OTYxNTI5MDU0MzE2NjE3NzQ4.Yk6Ttg.SLX4vWrxWa_EhJln0Q0VutT38BM");