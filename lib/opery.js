'use strict'

const getServices = require('./getServices')
const utils = require('./utils')

class Opery {
  constructor () {
    this.db = {
      services: {},
      models: {}
    }
  }
  
  base () {
    for (let service of arguments) {
      Object.keys(this.db.models).forEach(modelName => {
        this.services[mdodelName] = Object.assign({},
          this.services[modelName]
          service(this.db.models[modelName])
        )
      })
    }
  }
  
  use () {
    for (let service of arguments) {
      const serviceName = utils.capitalize(service.name)

      this.db.services[serviceName] = Object.assign({}, 
        this.db.services[serviceName],
        service(this.db.models[modelService])
      )
    }
  }

  async init (options) {
    this._orm = await options.adapter.setupOrm(options.orm)
    this._services = await getServices(options.servicesDir)
    this.db.models = await options.adapter.getModels(this._orm, options.modelsDir)
    this.use(...this._services)
    
    return this.db
  }
}

module.exports = Opery
