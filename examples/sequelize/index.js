'use strict'

const opery = require('../../')
const sequelizeAdapter = require('opery-sequelize-adapater')

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

opery.init(options).then(db => {
  console.log(db)
}).catch(err => {
  console.log(err)
})