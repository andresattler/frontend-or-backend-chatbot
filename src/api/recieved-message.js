import sendTextMessage from './send-message'

function receivedMessage(event) {
  const senderID = event.sender.id
  const messageText = event.message.text

  if (messageText) {
    sendTextMessage(senderID)
  }
  // Putting a stub for now, we'll expand it in the following steps
  // eslint-disable-next-line no-console
  console.log('Message data: ', event.message)
}

export default receivedMessage
