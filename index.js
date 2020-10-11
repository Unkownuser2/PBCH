const Discord = require('discord.js');
const client = new Discord.Client();



client.on('message', message => {

    if (message.content.startsWith(`91779664850836028255`)) {
        message.reply("Have Obtained A **Unique Shiny**");

    } else if (message.content.startsWith(`/?Start`)) {
        message.channel.send
        message.reply("Has Started The Game!");
        message.channel.send(`**RULES** \n 1. Do NOT Reuse Codes \n 2. Do NOT Steal Others Codes \n You Cannot Trade Using Other Payment Methods (You Can Use Other Codes To Trade)Such As Paypal, PayTM,Credict,Debit,Cash,Dank Memer Coins`)
    }else if (message.content.startsWith(`/?About`)) {
        message.channel.send("This Bot Is Powerd By PBX \n Codded By Tanmay \n ©@2020 PotatoBot Studios")


    }if (message.content.startsWith(`0167366758886541`)) {
        message.reply("Have Obtained A **Legendary Diamond Sword With Power 3**");

    }if (message.content.startsWith(`5143398503386275`)) {
        message.reply("Have Obtained A **Lagendary W00DEN STICK!**");

    }
});


client.login(process.env.token);