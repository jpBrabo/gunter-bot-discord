const execute = (bot, msg, args) => {
    return msg.reply("pong!")
}
module.exports={
    name:"ping",
    help:"pong",
    execute,
}