import mongoose from 'mongoose'

import sendTextMessage from './send-message'
import { welcomeMessage } from './responses'
import talk from './talk'

const User = mongoose.model('User', {
  id: String,
  currentState: Number,
})

function receivedMessage(event) {
  const senderID = event.sender.id
  const messageText = event.message.text

  if (messageText) {
    User.findById(senderID, (err, userObj) => {
      if (userObj) {
        const answer = talk(userObj.currentState, messageText)
        sendTextMessage(senderID, answer)
      } else {
        const user = new User({
          id: event.sender.id,
          currentState: 0,
        })
        user.save()
        sendTextMessage(senderID, welcomeMessage)
      }
    })
  }
}

export default receivedMessage
