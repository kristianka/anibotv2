import { SlashCommandBuilder } from "discord.js";
import { Command } from "../../types";

const command: Command = {
    data: new SlashCommandBuilder()
        .setName("user")
        .setDescription("Provides information about the user."),
    async execute(interaction) {
        // interaction.user is the object representing the User who ran the command
        // interaction.member is the GuildMember object, which represents the user in the specific guild
        if (!interaction.user) return;
        await interaction.reply(
            `This command was run by ${interaction.user.username}, ${interaction.user.id}!!!`
        );
    }
};

module.exports = command;
