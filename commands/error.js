module.exports = {
    name: 'error',
    description: "Cara menanggulangi apabila terjadi ERROR pada Map/Scanner/Device kamu ada di sini",
    execute(message, args){
        message.channel.send('Apabila kamu mengalami ERROR apapun dengan scanner kamu\nBaik itu Device HP atau ATV kamu\nCobalah untuk RESTART Device kamu dan tunggu sekitar 10 menit\nApabila masih terjadi ERROR silakan tanya di Channel <#750301599439781948>');
    }
}
