import mongoose from 'mongoose'

import sendTextMessage from './send-message'
import { welcomeMessage } from './responses'
import talk from './talk'

const User = mongoose.model('User', {
  _id: String,
  current_state: Number,
  total: Number,
})

function receivedMessage(event) {
  const senderID = event.sender.id
  const messageText = event.message.text

  if (messageText) {
    User.findById(senderID, (err, userObj) => {
      if (userObj) {
        const answer = talk(userObj.current_state, messageText, userObj.total)
        if (answer.type === 'QUESTION') {
          const nextState = userObj.current_state + 1
          const nextTotal = userObj.total + answer.weight
          User.update({ _id: senderID }, { current_state: nextState, total: nextTotal }).exec()
        } else if (answer.type === 'END') {
          User.findByIdAndRemove(senderID).exec()
        }
        sendTextMessage(senderID, answer.text)
      } else {
        const user = new User({
          _id: senderID,
          current_state: 0,
          total: 0,
        })
        user.save()
        sendTextMessage(senderID, welcomeMessage)
      }
    })
  }
}

export default receivedMessage
