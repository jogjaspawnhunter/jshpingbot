module.exports = {
    name: 'status',
    description: "this is a status command!",
    execute(message, args){
        message.channel.send('Status Devices : `0 pcs LIVE` - `4 pcs DOWN`\nStatus Devices apabila ada DOWN, tunggu **Restart & Update** dari yang pegang Devices ya\nVersi Map sekarang sudah support PoGo versi `0.187.1`\nPogoDroid bisa di download di: `http://maddev.eu/apk/PogoDroid.apk`\nRGC bisa di download di: `https://github.com/Map-A-Droid/MAD/blob/master/APK/RemoteGpsController.apk`');
    }
}
