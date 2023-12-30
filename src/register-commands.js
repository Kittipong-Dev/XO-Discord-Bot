require('dotenv').config()
const { REST, Routes, ApplicationCommandOptionType} = require('discord.js')

const commands = [
    {
        name: "xo-game",
        description: "Play xo game",
    },
];

const rest = new REST({ version: '10'}).setToken(process.env.TOKEN);

(async () => {
    try {
        console.log('Registering slash commands...')

        await rest.put(
            Routes.applicationGuildCommands(process.env.CLIENT_ID, process.env.GUILD_ID),
            { body: commands }
        )

        console.log('Registered slash commands')
    }
    catch (error) {
        console.log(error)
    }
})();