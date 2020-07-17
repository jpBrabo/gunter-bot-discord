const execute = (bot, msg, args) => {
    var random = Math.floor(Math.random() * 3);
    msg.react('🤔')
        .then(console.log)
        .catch(console.error);
    let timer = setTimeout(function espera() {
        msg.reply("pensando...");
    }, 1000)

    let resultado = setTimeout(function result(){
        msg.reply(`O número escolhido entre 1 e 6 foi ${random}`)
    }, 2000)
    return setTimeout(timer,resultado,1000 );
}
module.exports = {
    name: "dice",
    help: "sorteia um número aleatorio entre 1 e 6",
    execute,
}