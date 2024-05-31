import { SlashCommandBuilder } from "discord.js";
import { Command } from "../../types";

const command: Command = {
    data: new SlashCommandBuilder().setName("ping").setDescription("Ping pong!"),
    async execute(interaction) {
        // interaction.user is the object representing the User who ran the command
        // interaction.member is the GuildMember object, which represents the user in the specific guild
        await interaction.reply({ content: "Pong!", ephemeral: true });
    }
};

module.exports = command;
