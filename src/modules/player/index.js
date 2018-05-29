/**
 * 玩家类
 */

const HS_ROLE = require('../role')
const HS_HEALTH = require('../health')
const HS_MANA = require('../mana')

class HS_PLAYER {
  constructor (options = {}) {
    /* 玩家ID */
    this.id = options.id

    /* 玩家名称 */
    this.name = options.name

    /* 玩家职业 */
    this.role = new HS_ROLE({
      role: options.role
    })

    /* 玩家血量及护甲 */
    this.health = new HS_HEALTH()

    /* 玩家法力水晶 */
    this.mana = new HS_MANA()

    /* 当前是否玩家的回合 */
    this.isOwnRound = false
  }

  /* 改变当前的玩家回合 */
  changeOwnRound (status) {
    this.isOwnRound = status
  }

  /* 初始化新回合的法力水晶 */
  initRoundCrystal () {
    this.mana.initRoundCrystal()
  }
}

module.exports = HS_PLAYER
