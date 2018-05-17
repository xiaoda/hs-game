/**
 * 生命值类
 */

const HS_BASE = require('../base')

class HS_HEALTH extends HS_BASE {
  constructor (options = {}) {
    super()

    /* 初始血量 */
    let hp = 30

    /* 初始护甲 */
    let armor = 0

    this.setProps({
      hp,
      armor
    })
  }
}

module.exports = HS_HEALTH
