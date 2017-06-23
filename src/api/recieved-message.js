import mongoose from 'mongoose'
import sendTextMessage from './send-message'

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
        sendTextMessage(senderID, 'mongodb rocks!')
      } else {
        const user = new User({
          _id: event.sender.id,
          current_state: 0,
        })
        user.save()
        sendTextMessage(senderID, 'Welcome new User!')
      }
    })
  }
  // Putting a stub for now, we'll expand it in the following steps
  // eslint-disable-next-line no-console
  console.log('Message data: ', event.message)
}

export default receivedMessage
