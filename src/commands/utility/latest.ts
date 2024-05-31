import { Command } from "../../types.js";
import { SlashCommandBuilder } from "discord.js";
import { fetchReleases } from "../../fetchReleases";

import dotenv from "dotenv";
import { getDay, getTime } from "../../mics";
dotenv.config();

const command: Command = {
    data: new SlashCommandBuilder()
        .setName("latest")
        .setDescription("Provides latest 10 releases."),

    async execute(interaction) {
        try {
            await interaction.reply({ content: "Fetching, please wait... ⌛", ephemeral: true });

            let convertedMsg = "\n";
            let max = 10;

            const items = await fetchReleases();
            if (!items) {
                console.log("Items object is empty. Is the API down?");
                await interaction.reply({
                    content:
                        "There was an error while fetching the releases from the server. Please try again later.",
                    ephemeral: true
                });
                return;
            }

            for (let i = 0; i < max; i++) {
                // clear strings
                const rawTitle = items[i].title.toString();
                const category = items[i].category.toString();
                const pubDate = items[i].pubDate.toString();

                const titleWithEpisodeNum = rawTitle.slice(0, -23).slice(13);
                const pubTimeLocal = getTime(pubDate);
                const pubDateLocal = getDay(pubDate);

                // If a batch release then skip and add one to max amount fetched shows
                if (rawTitle.includes("[Batch]")) {
                    console.log("Skipping batch", category);
                    max += 1;
                    return;
                }

                convertedMsg += ` - ${titleWithEpisodeNum} on ${pubDateLocal} at ${pubTimeLocal} \n`;
            }
            console.log(
                `Sending below message to user ${interaction.user.username}: \n ${convertedMsg}`
            );
            await interaction.followUp({
                content: `## Latest 1080p episode releases
            \n ${convertedMsg}`,
                ephemeral: true
            });
        } catch (error) {
            console.log("Error sending message: ", error);
        }
    }
};

module.exports = command;
