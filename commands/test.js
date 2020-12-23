const chan1 = "<#788064501131509810>";
module.exports = {
    name: 'test',
    description: "Info Status Versi Map dan Device yang support untuk dijalankan",
    execute(message, args){
        message.channel.send('**Status Devices** : ${chan1}\n<#788065325844660274>\nCek info lebih lanjut di channel : <#746765672905965639>\n\n**Versi Map sekarang sudah support PoGo versi** : <#788067062840164362>\n**PogoDroid bisa di download di**: `http://maddev.eu/apk/PogoDroid.apk`\n**RGC bisa di download di**: `https://github.com/Map-A-Droid/MAD/blob/master/APK/RemoteGpsController.apk`');
    }
}
