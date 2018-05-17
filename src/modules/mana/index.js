/**
 * 法力水晶类
 */

const HS_BASE = require('../base')

const MAX_CRYSTAL = 10

class HS_MANA extends HS_BASE {
  constructor (options = {}) {
    super()

    /* 初始法力水晶 */
    let crystal = 0

    /* 可用法力水晶 */
    let usableCrystal = crystal

    this.setProps({
      crystal,
      usableCrystal
    })
  }

  /* 初始化新回合的法力水晶 */
  initRoundCrystal () {
    let {
      crystal,
      usableCrystal
    } = this

    if (crystal < MAX_CRYSTAL) crystal ++

    usableCrystal = crystal

    this.setProps({
      crystal,
      usableCrystal
    })
  }
}

module.exports = HS_MANA
