# opery

> Opery is the best ORM abstraction tool to create database modules for your projects.

## Features

* Makes easy the use of repository pattern in this way code doesn't break whenever you want     change the ORM or or refactoring some method to communicate with the database. 
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
- `options` _(Object)_
  - `orm`_(Object)_ ORM configuration object `NOTE:` Only Sequelize is support currently
  - `adapter` _(Adapter)_ Opery adapater object
  - `modelsDir` _(String)_ Models directory
  - `servicesDir` _(String)_ Services directory

## Services

### What is a service?

Services are logical abstraction for managing workloads.

For example, if you're working in an API REST and you have to call a user by username, it would be simpler to contain that logic somewhere and just call the method to obtain that user by username.

### How to create a service?

## Adapters

### What is an adapater?

### How to create an adapater

### Adapter list

- Sequelize Adpater 
  - [github](https://github.com/glopezep/opery-sequelize-adapater)
  - [npm](https://www.npmjs.com/package/opery-sequelize-adapter)

## API

### opery

#### `base(service: Function. [...service: Function]) -> void`

Register one or several services globally (for all models).

```js

opery.base(CustomService)

opery.init(options).then(db => {
  const result = await db.SomeModel.customServiceMethod()
})

```

#### `use(service: Function. [...service: Function]) -> void`

Register one or several services for specific models.

```js

opery.use(auth)

opery.init(options).then(db => {
  const result = await db.Auth.authMethod()
})

```

#### `init(options: Object) -> db: Object`

Initialize opery module to work with database layer.

- `options` _(Object)_
  - `orm`_(Object)_ ORM configuration object `NOTE:` Only Sequelize is support currently
  - `adapter` _(Adapter)_ Opery adapater object
  - `modelsDir` _(String)_ Models directory
  - `servicesDir` _(String)_ Services directory

```js

opery.init(options).then(db => {
  // do something with db module
})

```

## Contributing

[Fork](https://help.github.com/articles/fork-a-repo/) this repository to your own GitHub account and then [clone](https://help.github.com/articles/cloning-a-repository/) it to your local device

As always, you can run the AVA and ESLint tests using: npm test

## Authors

- Guillermo López [@glopezep](http://www.guillermolopez.net)

- Jorge Cuevas [@jcuevas012](https://github.com/jcuevas012)

## License

MIT © [Guillermo Lopez](http://www.guillermolopez.net)