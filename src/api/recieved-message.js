import mongoose from 'mongoose'

import sendTextMessage from './send-message'
import { welcomeMessage } from './responses'
import talk from './talk'

const User = mongoose.model('User', {
  _id: String,
  current_state: Number,
})

function receivedMessage(event) {
  const senderID = event.sender.id
  const messageText = event.message.text

  if (messageText) {
    User.findById(senderID, (err, userObj) => {
      if (userObj) {
        const answer = talk(userObj.current_state, messageText)
        sendTextMessage(senderID, answer)
      } else {
        const user = new User({
          _id: event.sender.id,
          current_state: 0,
        })
        user.save()
        sendTextMessage(senderID, welcomeMessage)
      }
    })
  }
}

export default receivedMessage
