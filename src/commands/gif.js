const execute = (bot, msg, args) => {
    const gifs = ["https://tenor.com/view/que-seja-clim%c3%a3o-ops-envergonhado-nervoso-gif-17805401", "https://tenor.com/view/shocked-gif-7443411","https://tenor.com/view/seal-sax-gif-8848340", "https://tenor.com/view/flamengo-dan%c3%a7a-ony-dance-gif-15393653" ,"https://tenor.com/view/pedro-monkey-puppet-meme-awkward-gif-15268759" ,"https://tenor.com/view/scared-nervous-kermit-kermitthefrog-muppets-gif-4625306"]
    const random = Math.floor(Math.random() * 6)
    msg.reply(`${gifs[random]}`)
}
module.exports = {
    name:"gif",
    help:"Mostra um gif aleatorio",
    execute
}