module.exports = {
    name: 'status',
    description: "this is a status command!",
    execute(message, args){
        message.channel.send('Versi Map sekarang sudah support PoGo versi `0.185.0` `0.185.1` `0.185.3` `0.187.1`\nPogoDroid bisa di download di: `http://maddev.eu/apk/PogoDroid.apk`\nRGC bisa di download di: `https://github.com/Map-A-Droid/MAD/blob/master/APK/RemoteGpsController.apk`');
    }
}
