import express from 'express'
import bodyParser from 'body-parser'

const app = express()

app.use(bodyParser.json())

app.get('/webhook', (req, res) => {
  if (req.query['hub.mode'] === 'subscribe' &&
      req.query['hub.verify_token'] === 'advekcw4t93409tuqw') {
    // eslint-disable-next-line no-console
    console.log('Validating webhook')
    res.status(200).send(req.query['hub.challenge'])
  } else {
    // eslint-disable-next-line no-console
    console.error('Failed validation. Make sure the validation tokens match.')
    res.sendStatus(403)
  }
})

function receivedMessage(event) {
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

    // Assume all went well.
    //
    // You must send back a 200, within 20 seconds, to let us know
    // you've successfully received the callback. Otherwise, the request
    // will time out and we will keep trying to resend.
    res.sendStatus(200)
  }
})

app.listen(process.env.PORT || 8000)
