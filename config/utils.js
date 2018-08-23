const path = require('path')
const resolve = (...paths) => path.resolve(__dirname, '../', ...paths)

module.exports = { resolve }
