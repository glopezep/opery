# opery

> Operay is a ORM switcher to facilitate the use of repository pattern so that code doesn't break. Based on adapters pattern 

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

## API