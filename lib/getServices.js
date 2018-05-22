'use strict'

const fs = require('fs')
const path = require('path')
const util = require('util')

const readdirAsync = util.promisify(fs.readdir)

module.exports = async function getServices (serviceDir) {
  const services = []
  const serviceNames = await readdirAsync(serviceDir)


  if (!serviceNames.length) {
    return []
  }

  for(let name of serviceNames) {
    if (name !== 'index.js') {
      name = name.replace('.js', '')
      const service = require(path.resolve(serviceDir, name))
      services.push(service)
    }
  }

  return services
}