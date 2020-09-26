const { prefix } = require('../config/config.json');

module.exports = {
	name: 'help',
	description: 'Mencantumkan semua perintah/command yang tersedia',
	aliases: ['commands'],
	usage: '[command name]',
	cooldown: 5,
	execute(message, args) {
		const data = [];
		const { commands } = message.client;

		if (!args.length) {
			data.push('Berikut semua perintah/command yang tersedia:');
			data.push(commands.map(command => command.name).join('\n'));
			data.push(`\nKamu bisa mengirimkan \`${prefix}help [command name]\` untuk mendapatkan keterangan tentang perintah itu lebih lanjut\ncontoh: \`${prefix}help ping\``);

			return message.author.send(data, { split: true })
				.then(() => {
					if (message.channel.type === 'dm') return;
					message.reply('Saya telah mengirimkan DM kepada kamu tentang perintah/command yang tersedia');
				})
				.catch(error => {
					console.error(`Tidak bisa mengirim DM kepada ${message.author.tag}.\n`, error);
					message.reply('Sepertinya saya tidak bisa mengirim DM kepada kamu');
				});
		}

		const name = args[0].toLowerCase();
		const command = commands.get(name) || commands.find(c => c.aliases && c.aliases.includes(name));

		if (!command) {
			return message.reply('Saya tidak mengerti apa maksudmu');
		}

		data.push(`**Name:** ${command.name}`);

		if (command.aliases) data.push(`**Aliases:** ${command.aliases.join(', ')}`);
		if (command.description) data.push(`**Description:** ${command.description}`);
		if (command.usage) data.push(`**Usage:** ${prefix}${command.name} ${command.usage}`);

		data.push(`**Cooldown:** ${command.cooldown || 3} second(s)`);

		message.channel.send(data, { split: true });
	},
};
