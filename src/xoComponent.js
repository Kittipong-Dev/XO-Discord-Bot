import { ActionRowBuilder, ButtonBuilder, ButtonStyle } from 'discord.js';

const buttonsSet1 = [
    {
        id: '1',
        label: '1',
    },
    {
        id: '2',
        label: '2',
    },
    {
        id: '3',
        label: '3',
    },
]

const buttonsSet2 = [
    {
        id: '4',
        label: '4',
    },
    {
        id: '5',
        label: '5',
    },
    {
        id: '6',
        label: '6',
    },
]

const buttonsSet3 = [
    {
        id: '7',
        label: '7',
    },
    {
        id: '8',
        label: '8',
    },
    {
        id: '9',
        label: '9',
    },
]

function xoComponent(board) {
    const row1 = new ActionRowBuilder()
    const row2 = new ActionRowBuilder()
    const row3 = new ActionRowBuilder()

    const board1 = board.slice(0, 3)
    const board2 = board.slice(3, 6)
    const board3 = board.slice(6, 9)

    for (let i = 0; i < buttonsSet1.length; i++) {
        if (!board1[i]) {
            row1.components.push(
                new ButtonBuilder()
                .setCustomId(buttonsSet1[i].id)
                .setLabel(buttonsSet1[i].label)
                .setStyle(ButtonStyle.Primary)
            )
        } else {
            row1.components.push(
                new ButtonBuilder()
                .setCustomId(buttonsSet1[i].id)
                .setLabel(buttonsSet1[i].label)
                .setStyle(ButtonStyle.Danger)
            )
        }
        
    }

    for (let i = 0; i < buttonsSet2.length; i++) {
        if (!board2[i]) {
            row2.components.push(
                new ButtonBuilder()
                .setCustomId(buttonsSet2[i].id)
                .setLabel(buttonsSet2[i].label)
                .setStyle(ButtonStyle.Primary)
            )
        } else {
            row2.components.push(
                new ButtonBuilder()
                .setCustomId(buttonsSet2[i].id)
                .setLabel(buttonsSet2[i].label)
                .setStyle(ButtonStyle.Danger)
            )
        }
        
    }

    for (let i = 0; i < buttonsSet3.length; i++) {
        if (!board3[i]) {
            row3.components.push(
                new ButtonBuilder()
                .setCustomId(buttonsSet3[i].id)
                .setLabel(buttonsSet3[i].label)
                .setStyle(ButtonStyle.Primary)
            )
        } else {
            row3.components.push(
                new ButtonBuilder()
                .setCustomId(buttonsSet3[i].id)
                .setLabel(buttonsSet3[i].label)
                .setStyle(ButtonStyle.Danger)
            )
        }
        
    }

    return [row1, row2, row3]
}

export {xoComponent};