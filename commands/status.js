module.exports = {
    name: 'status',
    description: "Info Status Versi Map dan Device yang support untuk dijalankan",
    execute(message, args){
        message.channel.send('**Status Devices** : `3 pcs LIVE` - `1 pcs DOWN` - `1 pcs MANUAL RESPOND NEEDED`\nStatus Devices apabila ada DOWN, tunggu **Restart & Update** dari yang pegang Devices ya\nStatus Devices apabila NEED MANUAL RESPOND, tunggu **Fix & Restart** dari pemegang device\n\n**Versi Map sekarang sudah support PoGo versi** : `0.191.2`\n**PogoDroid bisa di download di**: `http://maddev.eu/apk/PogoDroid.apk`\n**RGC bisa di download di**: `https://github.com/Map-A-Droid/MAD/blob/master/APK/RemoteGpsController.apk`');
    }
}
