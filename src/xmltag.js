const spreadAttrs = attrs =>
  Object.keys(attrs).map(key => `${key}="${attrs[key]}"`).join(' ')

const renderAttrs = attrs => attrs ? ` ${spreadAttrs(attrs)}` : ''

const isObject = o => typeof o === 'object' && o != null

const parseArgs = args => {
  const [firstArg, ...restArgs] = args
  const hasAttrs = isObject(firstArg)

  return {
    attrs: hasAttrs ? firstArg : undefined,
    children: hasAttrs ? restArgs : args
  }
}

const tag = name => (...args) => {
  const { attrs, children } = parseArgs(args)
  const hasChildren = children.length > 0

  return `<${name}${renderAttrs(attrs)}` +
    (hasChildren ? '' : ' /') + '>' +
    (hasChildren ? `${children.join('')}</${name}>` : '')
}

module.exports = tag
