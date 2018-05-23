'use strict'

const getServices = require('./getServices')
const utils = require('./utils')

class Opery {
  constructor () {
    this._baseServices = []
    this._modelServices = []
    this._localServices = []
    this._orm = {}
    this.db = {
      services: {},
      models: {}
    }
  }

  base () {
    for (let service of arguments) {
      this._baseServices.push(service)
    }
  }
  
  service () {
    for (let service of arguments) {
      this._modelServices.push(service)
    }
  }

  async beforeRun () {
    return Promise.resolve()
  }

  async afterRun () {
    this._use({ global: true, services: this._baseServices })
    this._use({ global: false, services: this._localServices })
    this._use({ global: false, services: this._modelServices })
    return Promise.resolve()
  }

  async run (options) {
    await this.beforeRun()
    this._orm = await options.adapter.setupOrm(options.orm)
    this._localServices = await getServices(options.servicesDir)
    this.db.models = await options.adapter.getModels(this._orm, options.modelsDir)
    await this.afterRun()
    
    return this.db
  }
  
  _use (options) {
    if (options.global) {
      for (let service of options.services) {
        Object.keys(this.db.models).forEach(modelName => {
          this.db.services[modelName] = Object.assign({},
            this.db.services[modelName],
            service(this.db.models[modelName])
          )
        })
      }
      return
    }

    for (let service of options.services) {
      const serviceName = utils.capitalize(service.name)

      this.db.services[serviceName] = Object.assign({},
        this.db.services[serviceName],
        service(this.db.models[serviceName])      
      )
    }

  }
}

module.exports = Opery
