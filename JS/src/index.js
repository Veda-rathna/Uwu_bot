const { Client, Events, IntentsBitField, Guild } = require('discord.js');
const { token } = require('./config.json');

const client = new Client({ 
	intents: [
		IntentsBitField.Flags.Guilds,
		IntentsBitField.Flags.GuildMembers,
		IntentsBitField.Flags.GuildMessages,
		IntentsBitField.Flags.MessageContent,
	],
});

client.once(Events.ClientReady, readyClient => {
	console.log(`Okey Dokey, ready to rape some ears ${readyClient.user.tag}`);
});

client.login(token);
