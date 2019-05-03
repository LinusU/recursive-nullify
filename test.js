const assert = require('assert')
const recursiveNullify = require('./')

const proto = (obj) => Object.getPrototypeOf(obj)

{
  const result = recursiveNullify({
    name: 'Bender',
    hind: 'Bitable',
    shiny: 'Yes'
  })

  assert.strictEqual(proto(result), null)
}

{
  const result = recursiveNullify({
    'bottle-on-wall': [ 1, 2, 3 ]
  })

  assert.strictEqual(proto(result), null)
}

{
  const result = recursiveNullify({
    pet: {
      species: 'Dahut',
      name: 'Hypatia'
    },
    kids: [ 'Ashley', 'Thelma' ]
  })

  assert.strictEqual(proto(result), null)
  assert.strictEqual(proto(result.pet), null)
}

{
  const heartbeat = []
  heartbeat[0] = 'thunk'
  heartbeat[2] = 'thunk'

  const result = recursiveNullify({
    heartbeat: heartbeat
  })

  assert.strictEqual(proto(result), null)
}

{
  const result = recursiveNullify({
    pet: [{
      species: 'Dahut',
      name: 'Hypatia'
    }, {
      species: 'Felis Stultus',
      name: 'Billie'
    }]
  })

  assert.strictEqual(proto(result), null)
  assert.strictEqual(proto(result.pet[0]), null)
  assert.strictEqual(proto(result.pet[1]), null)
}

{
  const deep = []
  deep[3] = { much: { power: { '!': 'Amaze' } } }

  const result = recursiveNullify({
    wow: {
      such: { deep }
    }
  })

  assert.strictEqual(proto(result), null)
  assert.strictEqual(proto(result.wow), null)
  assert.strictEqual(proto(result.wow.such), null)
  assert.strictEqual(proto(result.wow.such.deep[3]), null)
  assert.strictEqual(proto(result.wow.such.deep[3].much), null)
  assert.strictEqual(proto(result.wow.such.deep[3].much.power), null)
}

{
  const result = recursiveNullify({
    mix: {
      '': 'scalar',
      '0': 'array 1',
      '2': 'array 2',
      'key': 'key key',
      'car': 'car key'
    }
  })

  assert.strictEqual(proto(result), null)
  assert.strictEqual(proto(result.mix), null)
}

{
  const result = recursiveNullify({
    'error': { good: 'BOOM!' },
    'error[bad': 'BOOM BOOM!'
  })

  assert.strictEqual(proto(result), null)
  assert.strictEqual(proto(result.error), null)
}
