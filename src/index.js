import express from 'express'

const app = express()


app.get('/', (req, res) => {
  res.send('hello World')
})

app.listen(process.env.PORT || 8000)
