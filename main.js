const Discord = require('discord.js');
const config = require('./config/config.json');
const client = new Discord.Client();
const prefix = '!';
const fs = require('fs');

client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./commands/${file}`);

    client.commands.set(command.name, command);
}

client.once('ready', () => {
    console.log('Willow is online!')
});

client.on('message', message =>{
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if (!client.commands.has(command)) return;

    try {
	    client.commands.get(command).execute(message, args);
    } catch (error) {
	    console.error(error);
	    message.reply('ku tak tahu apa maksudmu, coba kirim `!help`');
    }
})


client.login(config.token);
