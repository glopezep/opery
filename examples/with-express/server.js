'use strict'

const express = require('express')
const setupDatabase = require('./middlewares/setupDatabase')

const app = express()

app.use(setupDatabase)

app.get('/api/users', async (req, res) => {
  const users = await req.db.services.User.findAll()
  res.send(users)
})

app.listen(3000, () => {
  console.log('Server running')
})