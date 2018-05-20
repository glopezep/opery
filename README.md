# opery

> Opery is the best ORM abstraction tool to create database modules for your projects.

## Features

* Makes easy the use of repository pattern in this way code doesn't break. 
* Based on adapters pattern.
* Allows to change orm easily

## Installation 

```bash
npm install --save opery
```

## Usage

```js
const opery = require('opery')
const sequelizeAdapter = require('opery-sequelize-adapter')

const options = {
  orm: { // necessary configuration for setup ORM (NOTE: in this case sequelize).
    database: 'test',
    username: 'my_user',
    password: 'secret',
    host: 'localhost',
    dialect: 'mysql',
  },
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

## Configuration
- `orm`_(Object)_ ORM configuration object `NOTE:` Only Sequelize is support currently
- `adapter` _(Adapter)_ Opery adapater object
- `modelsDir` _(String)_ Models directory
- `servicesDir` _(String)_ Services directory

## Services

### What is a service?

### How to create a service?

## Adapters

### What is an adapater?

### How to create an adapater

### Adapter list

- Sequelize Adpater 
  - [github](https://github.com/glopezep/opery-sequelize-adapater)
  - [npm](https://www.npmjs.com/package/opery-sequelize-adapter)

## API

## Contributing

[Fork](https://help.github.com/articles/fork-a-repo/) this repository to your own GitHub account and then [clone](https://help.github.com/articles/cloning-a-repository/) it to your local device

As always, you can run the AVA and ESLint tests using: npm test

## Author

- Guillermo López [@glopezep](http://www.guillermolopez.net)

## License

MIT © [Guillermo Lopez](http://www.guillermolopez.net)