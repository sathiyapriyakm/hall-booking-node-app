const express = require('express')
const app = express()

app.get('/', function (request, response) {
  response.send('Welcome to the application')
})

app.listen(3000)