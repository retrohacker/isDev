var assert = require('chai').assert

var pathToIndex = require.resolve('../index.js')

describe('isDev',function() {
  beforeEach(function() {
    delete process.env['NODE_ENV']
    delete require.cache[pathToIndex]
  })

  it('should detect when in dev mode',function() {
    process.env.NODE_ENV = 'dev'
    assert.strictEqual(require('../index.js'),true)
  })

  it('should detect when in development mode',function() {
    process.env.NODE_ENV = 'development'
    assert.strictEqual(require('../index.js'),true)
  })

  it('should default to dev mode when undefined',function() {
    assert.strictEqual(require('../index.js'),true)
  })

  it('should return false when in production',function() {
    process.env.NODE_ENV = 'production'
    assert.strictEqual(require('../index.js'),false)
  })

  it('should return false when in production',function() {
    process.env.NODE_ENV = 'production'
    assert.strictEqual(require('../index.js'),false)
  })

  it('should return false when in anything else',function() {
    process.env.NODE_ENV = 'foobar'
    assert.strictEqual(require('../index.js'),false)
  })

  afterEach(function() {
    delete process.env['NODE_ENV']
    delete require.cache[pathToIndex]
  })
})
