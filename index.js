'use strict'

const getServices = require('./lib/getServices')

async function init (options) {
  const db = { services: {} }
  const { adapter } = options
  const orm = await adapter.setupOrm(options.db)
  const models = await adapter.getModels(orm, options.modelsDir)
  const services = await getServices(options.servicesDir)
  const baseService = options.adapter.baseService

  Object.keys(models).forEach(modelName => {
    db.services[modelName] = baseService(models[modelName])
  })
  Object.keys(models).forEach(modelName => {
    let service = services[modelName]

    if (!service) {
      return
    }

    service = service(models[modelName])
    db.services[modelName] = Object.assign({}, db.services[modelName], service)
  
  })

  return db
}

module.exports = {
  init
}