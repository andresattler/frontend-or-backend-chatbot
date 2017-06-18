import express from 'express'

const app = express()


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
app.listen(process.env.PORT || 8000)

// tocken advekcw4t93409tuqw
