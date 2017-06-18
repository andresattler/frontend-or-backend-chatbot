import express from 'express'

const app = express()


app.get('/webhook', (req, res) => {
  res.send('hello World')
})

app.listen(process.env.PORT || 8000)

// tocken advekcw4t93409tuqw
