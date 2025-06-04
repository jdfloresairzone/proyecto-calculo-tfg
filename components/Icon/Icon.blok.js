// eslint-disable-next-line @typescript-eslint/no-var-requires
const iconOptions = require('./iconOptions')

module.exports = {
  name: 'Icon',
  display_name: 'Icon',
  schema: {
    name: {
      type: 'option',
      options: iconOptions,
      required: true,
      pos: 0,
    },
    size: {
      type: 'number',
      required: true,
      pos: 1,
      description: 'Size in pixels'
    },
  },
  is_root: false,
  is_nestable: true,
}
