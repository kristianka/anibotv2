import { Client, Collection, CommandInteraction, SlashCommandBuilder } from "discord.js";

// Extend the Client class to include a commands property
export class BotClient extends Client {
    commands!: Collection<string, any>;
}

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
