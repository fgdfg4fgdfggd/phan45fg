/*
* Gabe Dunn 2018
* Command that sends some info about the bot.
*/

import { blue } from '../utils/colours'
import { logError } from '../utils/log'
import { getAuthor } from '../utils/user'

// Export an object with command info and the function to execute.
export const aboutCommand = {
  name: 'About',
  aliases: ['about', 'info'],
  category: 'utils',
  description: 'Tells a little bit about the bot.',
  permissions: ['SEND_MESSAGES'],
  exec: async (args, message) => {
    try {
      try {
        // Remove the user's message.
        await message.delete()
      } catch (err) {
        await logError('About', 'Failed to delete message', err, message)
      }

      try {
        // Send the about message embed.
        // noinspection JSUnresolvedFunction
        return message.channel.send({
          embed: {
            title: 'Phantom - about the bot',
            color: blue,
            url: 'https://rcdforum.com/',
            description: 'Phantom is a bot made exclusively for ROBLOX Community Developers, ' +
              'It is written with discord.js. ' +
              'RCDForum.',
            fields: [
              {
                name: 'Author:',
                value: '<@605806584232411145>',
                inline: true
              },
              {
                name: 'RCDForum:',
                value: 'https://rcdforum.com/',
                inline: true
              }
            ],
            author: getAuthor(message.member),
            timestamp: new Date()
          }
        })
      } catch (err) {
        await logError('About', 'Failed to send message', err, message)
      }
    } catch (err) {
      await logError('About', 'Failed to run command', err, message)
    }
  }
}
