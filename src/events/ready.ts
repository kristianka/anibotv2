import { Events } from "discord.js";
import { BotClient } from "../types";

module.exports = {
    name: Events.ClientReady,
    once: true,
    execute(client: BotClient) {
        if (client.user) {
            console.log(`Ready! Logged in as ${client.user.tag}`);
        } else {
            console.log("Ready! Logged in. But unable to get user tag.");
        }
    }
};
