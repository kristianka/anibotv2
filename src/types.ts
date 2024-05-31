import { CommandInteraction, SlashCommandBuilder } from "discord.js";

export interface Command {
    data: SlashCommandBuilder;
    execute: (interaction: CommandInteraction) => Promise<void>;
}

export interface RssDataInterface {
    rss: {
        channel: {
            title: string;
            description: string;
            link: string;
            item: [ItemInterface];
        }[];
    };
}

export interface ItemInterface {
    title: string;
    pubDate: string;
    category: string;
}
