const Discord = require('discord.js-self')
const client = new Discord.Client()

const { token } = require('./config.json')
const targetID = '844867333906628619'

client.on('ready', () => {
    console.log(`Logged on as ${client.user.tag}`)
})

client.on('voiceStateUpdate', (oldState, newState) => {
    if (newMember.id === targetID) {
        console.log(newMember.name)
        newMember.kick()
    }
})

client.login(token)