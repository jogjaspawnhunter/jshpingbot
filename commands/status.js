module.exports = {
    name: 'status',
    description: "Info Status Versi Map dan Device yang support untuk dijalankan",
    execute(message, args){
        message.channel.send('**Status Devices** : `4 pcs LIVE` - `0 pcs DOWN` - `1 pcs NEED MANUAL RESPOND`\nStatus Devices apabila ada DOWN, tunggu **Restart & Update** dari yang pegang Devices ya\nStatus Devices apabila NEED MANUAL RESPOND, tunggu **Fix & Restart** dari pemegang device\n\n**Versi Map sekarang sudah support PoGo versi** : `0.187.2`\n\n**PogoDroid bisa di download di**: `http://maddev.eu/apk/PogoDroid.apk`\n\n**RGC bisa di download di**: `https://github.com/Map-A-Droid/MAD/blob/master/APK/RemoteGpsController.apk`');
    }
}
