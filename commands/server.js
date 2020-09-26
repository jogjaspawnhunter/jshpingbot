module.exports = {
	name: 'server',
	description: 'Info tentang group discord kita ini',
	execute(message) {
		message.channel.send(`Nama Group Discord: ${message.guild.name}\nJumlah total member: ${message.guild.memberCount}`);
	},
};
