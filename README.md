# opery

> Opery is the best ORM abstraction tool to create database modules for your projects.

## Features

* Makes easy the use of repository pattern in this way code doesn't break whenever you      want change the ORM or or refactoring some method to communicate with the database. 
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

opery.run(options).then(db => {
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

Create a opery service is easy, Services are simply a function that return an Javascript Literal Object.

`IMPORTANT:` Service function name is really important. this name will depend if the service works or not. this name must be equal to the name of the model with which we are going to work since service function receives by parameter the model that is equal to the name of service function

Example:

`In this example we will work with Sequelize.`

imagine that we already have a project set up like this in example list, and we have created our user model.

Our next step will be to create a service to work with that model.

Let's go to the code.

```js

// this is our user service
function user (Model) {
  return {
    async getUserByEmail (email, options) {
      const user = await Model.findOne({ where: { email }, ...options })
    },
    async getUserByUsername () {
      //...
    }
  }
}
```

We already created our user service. Our next step is to use the service.
we'll see that in the section on how to use a service.

### How to use a service?


### Services list

Services can be created by anyone. 
this is a list of services created by the community

- Sequelize Base Service 
    [github](https://github.com/glopezep/opery-sequelize-base-service) -
    [npm](https://www.npmjs.com/package/opery-sequelize-base-service)

- Sequelize User Auth Service 
    [github](https://github.com/glopezep/opery-sequelize-user-auth-service) -
    [npm](https://www.npmjs.com/package/opery-sequelize-user-auth-service)

## Adapters

### What is an adapter?

### How to create an adapter?

### Adapter list

Adpapters can be created by anyone. 
this is a list of adapters created by the community

- Sequelize Adpater 
    [github](https://github.com/glopezep/opery-sequelize-adapater)
    [npm](https://www.npmjs.com/package/opery-sequelize-adapter)


## Hooks

Currently Hooks are proposal and internal use.

### opery

#### `beforeRun(callback: Function) -> Promise`

Do something before run opery.

```js

opery.beforeRun(() => {
  // do something
})

```

##### `afterRun(callback: Function) -> Promise`

Do something after run opery.

```js

opery.afterRun(() => {
  // do something
})

```

## API

### opery

#### `base(service: Function. [...service: Function]) -> void`

Register one or several services globally (for all models).

```js

opery.base(CustomService)

opery.run(options).then(db => {
  const result = await db.services.SomeModel.customServiceMethod()
})

```

#### `service(service: Function. [...service: Function]) -> void`

Register one or several services for specific models.

```js

opery.service(auth)

opery.run(options).then(db => {
  const result = await db.services.Auth.authMethod()
})

```

#### `run(options: Object) -> db: Object`

Initialize opery module to work with database layer.

- `options` _(Object)_
  - `orm`_(Object)_ ORM configuration object `NOTE:` Only Sequelize is support currently
  - `adapter` _(Adapter)_ Opery adapater object
  - `modelsDir` _(String)_ Models directory
  - `servicesDir` _(String)_ Services directory

```js

opery.run(options).then(db => {
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