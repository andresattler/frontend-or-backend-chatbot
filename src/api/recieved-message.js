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
        const nextState = userObj.current_state + 1
        console.log({ _id: senderID }, { current_state: nextState })
        User.update({ _id: senderID }, { current_state: nextState }).exec()
        sendTextMessage(senderID, answer)
      } else {
        const user = new User({
          _id: senderID,
          current_state: 0,
        })
        user.save()
        sendTextMessage(senderID, welcomeMessage)
      }
    })
  }
}

export default receivedMessage
