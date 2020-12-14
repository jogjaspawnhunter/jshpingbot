module.exports = {
	name: 'coba',
	description: 'Info tentang group discord kita ini',
	execute(message) {
		message.channel.send(`Status: <#788061193050521651>`\nJumlah total member: ${message.guild.memberCount}`);
	},
};
