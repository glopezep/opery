'use strict'

const express = require('express')
const setupDatabase = require('./db')

const app = express()

let db = null

app.use('*', async (req, res, next) => {
  if (!db) {
    db = await setupDatabase()
  }
  
  next()
})

app.get('/api/users', async (req, res) => {
  const users = await db.services.User.findAll()
  res.send(users)
})

app.listen(3000, () => {
  console.log('Server running')
})