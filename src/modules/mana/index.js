/**
 * 法力水晶类
 */

const MAX_CRYSTAL = 10

class HS_MANA {
  constructor (options = {}) {
    /* 初始法力水晶 */
    this.crystal = 0

    /* 可用法力水晶 */
    this.usableCrystal = this.crystal
  }

  /* 初始化新回合的法力水晶 */
  initRoundCrystal () {
    if (this.crystal < MAX_CRYSTAL) this.crystal ++

    this.usableCrystal = this.crystal
  }
}

module.exports = HS_MANA
