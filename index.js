function val (value) {
  if (value == null) return value
  if (typeof value !== 'object') return value

  return Array.isArray(value) ? arr(value) : obj(value)
}

function arr (items) {
  return items.map((item) => val(item))
}

function obj (props) {
  let result = Object.create(null)

  for (const key of Object.keys(props)) {
    result[key] = val(props[key])
  }

  return result
}

module.exports = val
