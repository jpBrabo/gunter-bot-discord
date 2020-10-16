const discord = require('discord.js');
const mensageEmbed = require('discord.js').MessageEmbed
const dotenv = require('dotenv');
const fs = require('fs')
const path = require('path')

dotenv.config()

const bot = new discord.Client();
bot.commands = new discord.Collection()

const commandFiles = fs
    .readdirSync(path.join(__dirname, "/commands"))
    .filter((filename) => filename.endsWith(".js"))

for(var filename of commandFiles){
    const command = require(`./commands/${filename}`)

    bot.commands.set(command.name, command)
}

bot.login(process.env.TOKEN)

bot.on("ready", () => {
    console.log(`${bot.user.username} tá on!`)
})
bot.on("message", (msg) => {
    if (msg.content.includes("dia")){
        msg.react('☀️')
        msg.reply("acorrrrda! >:/")
    }
    if (msg.content.includes("tarde")){
        msg.react('☕')
        msg.channel.send("tarrrde")
    }
    if(msg.content.includes("noite")){
        msg.react('🌙')
        msg.channel.send("boa noite")
    }
    
})
bot.on("message", (msg) => {
    if(!msg.content.startsWith(process.env.PREFIX) || msg.author.bot ) return;
    const args = msg.content.slice(process.env.PREFIX.length).split(" ")
    const command = args.shift()
    
    try{
        bot.commands.get(command).execute(bot, msg, args)
    } catch(e) {
        return msg.reply("Ops! eu ainda não conheço esse comando!:/")
    }
    
})
bot.on("guildMemberAdd",(member) => { 
    const embed = {
        color:"#0099ff",
        title:`Seja Bem-vindo(a) ${member.user.username}#${member.user.discriminator}!  `,
        description:"Me siga nas redes sociais!!!",
        thumbnail:{
            url:
            member.user.avatar
            ? `https://cdn.discordapp.com/avatars/${member.user.id}/${member.user.avatar}.png`
            : `https://cdn.discordapp.com/embed/avatars/${
                member.user.discriminator % 5
              }.png`
        },
        url:'https://twitch.tv/jpbrab0',
        author: {
            name:'jpbrab0',
            icon_url:`https://cdn.discordapp.com/icons/${member.guild.id}/${member.guild.icon}.png`,
            url:'https://github.com/jpBrab0',
        },
        fields: [
            {
                name:":purple_circle: Twitch",
                value:"[jpbrab0](https://twitch.tv/jpbrab0)",
                inline:true
            },
            {
                name:":man_office_worker:  Linkedin",
                value:"[João Pedro Resende](https://www.linkedin.com/in/jpresdev/)",
                inline:true
            },
            {
                name:":computer: Github",
                value:"[jpbrabo](https://github.com/jpbrab0)",
                inline:true
            },
            {
                name:":bird: Twitter",
                value:"[@jpbrab0](https://twitter.com/jpbrab0)",
                inline:true
            },
            {
                name:":red_circle: Youtube",
                value:"[João Pedro](https://www.youtube.com/channel/UC7HsgG803jN6UakOzSVZ5lQ?view_as=subscriber)",
                inline:true
            },
            {
                name:":camera_with_flash: Instagram",
                value:"[jpresdev](https://www.instagram.com/jpresdev/)",
            }
        ],
        timestamp: new Date(),
        footer:{
            text:'jpbrab0 • © Todos os direitos reservados.',
            icon_url:`https://cdn.discordapp.com/icons/${member.guild.id}/${member.guild.icon}.png`,
            
        }
    }
    member.guild.systemChannel.send({ embed })
  })
