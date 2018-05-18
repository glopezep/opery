'use strict'

const fs = require('fs')
const util = require('util')

const readdirAsync = util.promisify(fs.readdir)

module.exports = async function getServices (serviceDir) {
  const services = {}
  const serviceNames = await readdirAsync(serviceDir)

  if (!serviceNames.length) {
    return {}
  }

  for(let name of serviceNames) {
    if (name !== 'index.js') {
      const service = require(path.join(__dirname, name))
      services[name] = service 
    }
  }

  return services
}