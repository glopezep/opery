'use strict'

const opery = require('../../')
const sequelizeAdapter = require('../../adapters/operySequelizeAdapater')

const options = {
  db: {
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

opery.init(options).then(db => {
  console.log(db)
}).catch(err => {
  console.log(err)
})