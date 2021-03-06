const RpcEngine = require('json-rpc-engine')
const providerFromEngine = require('fourtwenty-json-rpc-middleware/providerFromEngine')
const createInfuraMiddleware = require('.')

module.exports = createProvider

function createProvider (opts) {
  const engine = new RpcEngine()
  engine.push(createInfuraMiddleware(opts))
  return providerFromEngine(engine)
}
