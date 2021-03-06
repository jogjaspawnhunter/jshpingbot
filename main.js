const fs = require('fs');
const Discord = require('discord.js');
const { prefix, token } = require('./config/config.json');

const client = new Discord.Client();
client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	client.commands.set(command.name, command);
}

const cooldowns = new Discord.Collection();

client.once('ready', () => {
	console.log('Prof. Willow Jr. is Online');
});

client.on('message', message => {
	if (!message.content.startsWith(prefix) || message.author.bot) return;

	const args = message.content.slice(prefix.length).trim().split(/ +/);
	const commandName = args.shift().toLowerCase();

	const command = client.commands.get(commandName)
		|| client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName));

	if (!command) return message.reply('Saya tidak tahu apa maksudmu, coba cek dengan mengirim \`${prefix}help\`');

	if (command.guildOnly && message.channel.type === 'dm') {
		return message.reply('Saya tidak bisa menggunakan perintah itu dalam DM');
	}

	if (command.args && !args.length) {
		let reply = `Kamu tidak menyertakan arguments, ${message.author}!`;

		if (command.usage) {
			reply += `\nCara menggunakan arguments: \`${prefix}${command.name} ${command.usage}\``;
		}

		return message.channel.send(reply);
	}

	if (!cooldowns.has(command.name)) {
		cooldowns.set(command.name, new Discord.Collection());
	}

	const now = Date.now();
	const timestamps = cooldowns.get(command.name);
	const cooldownAmount = (command.cooldown || 3) * 1000;

	if (timestamps.has(message.author.id)) {
		const expirationTime = timestamps.get(message.author.id) + cooldownAmount;

		if (now < expirationTime) {
			const timeLeft = (expirationTime - now) / 1000;
			return message.reply(`Mohon tunggu ${timeLeft.toFixed(1)} detik lagi, sebelum menggunakan perintah \`${command.name}\` lagi.`);
		}
	}

	timestamps.set(message.author.id, now);
	setTimeout(() => timestamps.delete(message.author.id), cooldownAmount);

	try {
		command.execute(message, args);
	} catch (error) {
		console.error(error);
		message.reply('Ada error dalam melakukan perintah itu');
	}
});

client.login(token);
