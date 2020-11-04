# fourtwenty-json-rpc-infura

`json-rpc-engine` middleware for infura's REST endpoints.

### usage as provider

```js
const createInfuraProvider = require('fourtwenty-json-rpc-infura/src/createProvider')
const Fourtwozerojs = require('fourtwozerojs')

const provider = createInfuraProvider({ network: 'mainnet', projectId: 'example' })
const eth = new Fourtwozerojs(provider)
```

### usage as middleware

```js
const createInfuraMiddleware = require('fourtwenty-json-rpc-infura')
const RpcEngine = require('json-rpc-engine')

const engine = new RpcEngine()
engine.push(createInfuraMiddleware({ network: 'ropsten', projectId: 'example' }))
```
