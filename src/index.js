import express from 'express'
import bodyParser from 'body-parser'
import request from 'request'

const app = express()

const token = process.env.FB_PAGE_ACCESS_TOKEN

app.use(bodyParser.json())

app.get('/webhook', (req, res) => {
  if (req.query['hub.verify_token'] === 'advekcw4t93409tuqw') {
    res.status(200).send(req.query['hub.challenge'])
  } else {
    res.sendStatus(403)
  }
})

function sendTextMessage(recipientId) {
  request({
    uri: 'https://graph.facebook.com/v2.6/me/messages',
    qs: { access_token: token },
    method: 'POST',
    json: {
      recipient: {
        id: recipientId,
      },
      message: {
        text: 'Hello World!',
      },
    },
  }, (error, response) => {
    if (error) {
      // eslint-disable-next-line no-console
      console.error('Error sending messages: ', error)
    } else if (response.body.error) {
      // eslint-disable-next-line no-console
      console.error('Error: ', response.body.error)
    }
  })
}

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

app.post('/webhook', (req, res) => {
  const data = req.body
  // Make sure this is a page subscription
  if (data.object === 'page') {
    // Iterate over each entry - there may be multiple if batched
    data.entry.forEach((entry) => {
      // const pageID = entry.id
      // const timeOfEvent = entry.time

      // Iterate over each messaging event
      entry.messaging.forEach((event) => {
        if (event.message) {
          receivedMessage(event)
        } else {
          // eslint-disable-next-line no-console
          console.log('Webhook received unknown event: ', event)
        }
      })
    })
    res.sendStatus(200)
  }
})

app.listen(process.env.PORT || 8000)
