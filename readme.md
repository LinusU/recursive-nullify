# Recursive Nullify

Return a clone of a deep object, with all prototypes set to null.

## Installation

```sh
npm add recursive-nullify
```

## Usage

```js
const recursiveNullify = require('recursive-nullify')

console.log(recursiveNullify({ hello: { name: 'world' } }))
//=> [Object: null prototype] {
//     hello: [Object: null prototype] { name: 'world' }
//   }
```
