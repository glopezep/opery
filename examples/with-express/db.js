'use strict'

const opery = require('opery')
const sequelizeAdapter = require('opery-sequelize-adapter')
const sequelizeBaseService = require('opery-sequelize-base-service')

const options = {
  orm: {
    database: 'test',
    username: 'root',
    password: '',
    host: 'localhost',
    dialect: 'mysql'
  },
  adapter: sequelizeAdapter,
  modelsDir: './models',
  servicesDir: './services'
}

opery.base(sequelizeBaseService)

module.exports = async function setupDatabase () {
  const db = await opery.run(options)
  return Promise.resolve(db)
}