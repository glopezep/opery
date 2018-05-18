# opery

> Opery is the best ORM abstraction tool to create database modules for your projects.


## Features

* Makes easy the use of repository pattern in this way code doesn't break. 
* Based on adapters pattern.
* Allows to change orm easily


## Install 

```bash
npm install --save opery
```


## Usage

```js
const opery = require('opery')
const sequelizeAdapter = require('operySequelizeAdapater')

const options = {
  database: 'test',
  username: 'my_user',
  password: 'secret',
  host: 'localhost',
  dialect: 'mysql',
  adapter: sequelizeAdapter,
  modelsDir: '/path/to/models',
  servicesDir: '/path/to/services',
}

opery.init(options).then(db => {
  db.services.SomeModel.create(data, (err, created) => {
    if (err) {
      // do something with err
    }
    // do something with created user
  })

  // Or using promises
  
  db.services.SomeModel.create(data).then(created => {
    // do something with created user
  }).catch(err => {
    // do something with err
  })
})
```

## How to create an adapater

## API