'use strict'

const opery = require('../')
const sequelizeAdapter = require('../../opery-adapters/opery-sequelize-adapater')
const baseService = require('../../opery-services/opery-sequelize-base-service')
const config = require('./config')

function user (Model) {
  return {
    authenticate () {}
  }
}

function group (Model) {
  return {
    listMembers () {}
  }
}

function role () {
  return {
    list () {}
  }
}

config.adapter = sequelizeAdapter

opery.base(baseService)
opery.service(user, group)
opery.service(role)

opery.init(config).then(db => {
  
  console.log(db)
})
