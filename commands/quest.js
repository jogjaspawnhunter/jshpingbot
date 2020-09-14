module.exports = {
    name: 'quest',
    description: "this is a quest command!",
    execute(message, args){
        message.channel.send('Quest Scanning akan otomatis reset pada pukul 0:00 WIB,\nApabila ada ERROR atau RESET Bulanan atau Event baru,\nMohon infokan kepada Admin & Moderator ya Gaes, Thanks');
    }
}
