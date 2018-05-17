/**
 * 基础类
 */

const helper = require('../helper')

class HS_BASE {
  constructor () {}

  /* 更新属性 */
  setProps (props, fn) {
    helper.forEachObj(props, (value, prop) => {
      this[prop] = value
    })

    helper.safelyRun(fn)
  }
}

module.exports = HS_BASE
