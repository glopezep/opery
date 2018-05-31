'use strict'

const setupDatabase = require('./setupDatabase')

let db = null

module.exports = async function (req, res, next) {
  if (!db) {
    db = await setupDatabase()
  }

  if (!req.db) {
    req = Object.assign({}, req, db)
  }

  next()
}