import { SlashCommandBuilder, CommandInteraction } from "discord.js";

interface Command {
    data: SlashCommandBuilder;
    execute: (interaction: CommandInteraction) => Promise<void>;
}

const command: Command = {
    data: new SlashCommandBuilder().setName("ping").setDescription("Ping pong!"),
    async execute(interaction) {
        // interaction.user is the object representing the User who ran the command
        // interaction.member is the GuildMember object, which represents the user in the specific guild
        await interaction.reply("Pong!");
    }
};

module.exports = command;
