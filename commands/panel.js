const {
    SlashCommandBuilder,
    EmbedBuilder,
    ActionRowBuilder,
    ButtonBuilder,
    ButtonStyle
} = require("discord.js");


module.exports = {

data: new SlashCommandBuilder()
.setName("panel")
.setDescription("Creates the BNR application panel"),


async execute(interaction){


const embed = new EmbedBuilder()

.setTitle("⚔️ BNR Clan Applications")

.setDescription(
`
Welcome to BNR recruitment.

Click the button below to start your application.

You will be asked for:
• Roblox Rivals Level
• Roblox Rivals Rank

After submitting, a private application channel will be created.
`
)

.setColor("Red");


const button = new ButtonBuilder()

.setCustomId("apply")

.setLabel("📝 Apply")

.setStyle(ButtonStyle.Success);



await interaction.reply({

embeds:[embed],

components:[
new ActionRowBuilder()
.addComponents(button)
]

});


}

};
