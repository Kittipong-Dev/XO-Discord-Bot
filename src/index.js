import dotenv from 'dotenv';
dotenv.config()
import { Client, IntentsBitField, EmbedBuilder } from 'discord.js';
import { xoComponent } from './send-message.js';

const client = new Client({
    intents: [
        IntentsBitField.Flags.Guilds,
        IntentsBitField.Flags.GuildMembers,
        IntentsBitField.Flags.GuildMessages,
        IntentsBitField.Flags.MessageContent,
    ],
});

client.on('ready', (c) => {
    console.log(`${c.user.tag} is online.`)
})

let board = [0, 0, 0, 0, 0, 0, 0, 0, 0]
let boardUI = []
let turn = 0
let userId1 = ''
let userId2 = ''

client.on('interactionCreate', async (interaction) => {
    try {
        if (interaction.isChatInputCommand()) {
            if (interaction.commandName == "xo-game") {
                userId1 = ''
                userId2 = ''
                board = [0, 0, 0, 0, 0, 0, 0, 0, 0]
                boardUI = []
                turn = 0

                interaction.reply(
                    { 
                        content: `⬜⬜⬜\n⬜⬜⬜\n⬜⬜⬜`,
                        components: xoComponent(board)
                    },
                )
            }
        }
        
        if (interaction.isButton()) {    
            if (interaction.customId && ((board[parseInt(interaction.customId) - 1]) === 0)) {
                console.log('In')
                if (turn === 0) {
                    board[parseInt(interaction.customId) - 1] = 1
                }
                else if (turn === 1) {
                    board[parseInt(interaction.customId) - 1] = 2
                }
                
                turn++;

                // render
                let i = 0
                board.forEach((index) => {
                    if (i === 3) {
                        boardUI.push('\n')
                    }
                    if (index === 1) {
                        boardUI.push('🎅🏻')
                    } 
                    else if (index === 2) {
                        boardUI.push('👽')
                    }
                    else {
                        boardUI.push('⬜')
                    }
                    i = i % 3 + 1
                })

                interaction.channel.send(
                    { 
                        content: boardUI.join(""),
                        components: xoComponent(board)
                    },
                )

                console.log(board, boardUI, turn)

                boardUI = []
                turn = turn % 2
            }
        }
            
    }
    catch (error) {
        console.log(error)
    }
})

client.login(process.env.TOKEN);