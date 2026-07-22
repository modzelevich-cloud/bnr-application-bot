const {
ChannelType,
PermissionFlagsBits,
EmbedBuilder
} = require("discord.js");


module.exports = (client)=>{


client.on("interactionCreate", async interaction=>{


if(interaction.isButton()){


if(interaction.customId==="apply"){


await interaction.reply({

content:"What is your Roblox Rivals Level?",

ephemeral:true

});


}

}



});


};
