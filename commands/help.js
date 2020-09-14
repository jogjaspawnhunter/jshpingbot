module.exports = {
    name: 'help',
    description: "this is a help command!",
    execute(message, args){
        message.channel.send('Kirim chat ` !help ` untuk melihat ini.\nPrefix/Command yang tersedia adalah sbb:\n\n!help : Menampilkan semua prefix/command yang tersedia\n!ping : Akan dibalas dengan pong!\n!wiki : Akan menunjukkan cara-cara yang kamu perlukan\n!update : Cara update map/scanner/device kamu\n!donasi : Cara untuk melakukan Donasi\n!bayar : Cara untuk melakukan Kontribusi/Patungan bulanan untuk Map kita tercinta\n!gratisan : Apabila ada giveaway atau yang gratisan ada di sini\n!error : Cara menanggulangi apabila terjadi ERROR pada Map/Scanner/Device kamu ada di sini\n!quest : Info update & Pengetahuan umum tentang quest pada Map kita\n!mega : Info tentang Mega update\n!status : Info Status Versi Map dan Device yang support untuk dijalankan\n\nRajinlah membaca terlebih dahulu dari info-info yang ada :smile:\nTerima Kasih');
    }
}