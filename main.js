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

    if(command === 'ping'){
        client.commands.get('ping').execute(message, args);
    } else if(command == 'wiki'){
        client.commands.get('wiki').execute(message, args);
    } else if(command == 'help'){
        client.commands.get('help').execute(message, args);
    } else if(command == 'update'){
        client.commands.get('update').execute(message, args);
    } else if(command == 'bayar'){
        client.commands.get('bayar').execute(message, args);
    } else if(command == 'donasi'){
        client.commands.get('donasi').execute(message, args);
    } else if(command == 'error'){
        client.commands.get('error').execute(message, args);
    } else if(command == 'gratisan'){
        client.commands.get('gratisan').execute(message, args);
    } else if(command == 'quest'){
        client.commands.get('quest').execute(message, args);
    } else if(command == 'mega'){
        client.commands.get('mega').execute(message, args);
    } else if(command == 'thanks'){
        client.commands.get('thanks').execute(message, args);
    } else if(command == 'status'){
        client.commands.get('status').execute(message, args);
    } else{
        message.channel.send('ku tak tau apa maksudmu');
    }
})


client.login(config.token);
