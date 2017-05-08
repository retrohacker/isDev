isdev
===

# Installation

`npm install --save isdev`

A simple little utility for checking if you are in a development environment.

The specification can be found in the mocha tests, but the gist is this:

*NODE_ENV value:*
* Development environment:
  * `'dev'`
  * `'development'`
  * `undefined`
* Not Development
  * everything else


To use:

```
var isDev = require('isdev')

if(isDev) {
  console.log("In Development!")
} else {
  console.log("Not in Development!")
}
```

On the off chance that you change your NODE_ENV mid-execution (*READ*: DO _NOT_ DO THIS!), you need to clear the require cache for isDev since we cache the result:

```
process.env.NODE_ENV = 'dev'
var isDev = require('isDev')
process.env.NODE_ENV = 'production'
//isDev still thinks we are in dev here.
delete require.cache[require.resolve('isDev')]
isDev = require('isDev')
//isDev no longer thinks we are in dev
```
