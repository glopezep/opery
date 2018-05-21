'use strict'

const getServices = require('./getServices')

class Opery {
  constructor () {
    this.db = {
      services: {},
      models: {}
    }
  }
  
  base () {}
  
  use () {}

  async init (options) {
    this._orm = await options.adapter.setupOrm(options.orm)
    this._services = await getServices(options.servicesDir)
    this._baseService = options.adapter.baseService
    this.db.models = await options.adapter.getModels(this._orm, options.modelsDir)
    this._setupBaseService()
    this._setupServices()

    return this.db
  }

  _setupBaseService () {
    Object.keys(this.db.models).forEach(modelName => { // setup base service for each model
      this.db.services[modelName] = this._baseService(this.db.models[modelName])
    })
  }

  _setupServices () {
    Object.keys(this.db.models).forEach(modelName => {
      let service = this._services[modelName]

      if (!service) {
        return
      }

      service = service(this.db.models[modelName])
      
      this.db.services[modelName] = Object.assign({}, 
        this.db.services[modelName],
        service
      )
    })
  }
}

module.exports = Opery
