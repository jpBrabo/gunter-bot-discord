const execute = (bot, msg , args) => {
    var random = Math.floor(Math.random() * 3);
    msg.react('🤔')
    msg.reply(`O número escolhido entre 1 e 6 foi ${random}  :sunglasses: :thumbsup: `)
}
module.exports = {
    name:"dado",
    help:"Sorteia um número de 1 a 10",
    execute
}