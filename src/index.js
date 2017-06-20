import express from 'express'
import bodyParser from 'body-parser'

import receivedMessage from './api/recieved-message'

const app = express()

app.use(bodyParser.json())

app.get('/webhook', (req, res) => {
  if (req.query['hub.verify_token'] === 'advekcw4t93409tuqw') {
    res.status(200).send(req.query['hub.challenge'])
  } else {
    res.sendStatus(403)
  }
})

app.post('/webhook', (req, res) => {
  const data = req.body
  if (data.object === 'page') {
    data.entry.forEach((entry) => {
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
