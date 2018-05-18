/**
 * 玩家类
 */

const HS_BASE = require('../base')
const HS_ROLE = require('../role')
const HS_HEALTH = require('../health')
const HS_MANA = require('../mana')

class HS_PLAYER extends HS_BASE {
  constructor (options = {}) {
    super()

    /* 玩家ID */
    let id = options.id

    /* 玩家名称 */
    let name = options.name

    /* 玩家职业 */
    let role = new HS_ROLE({
      role: options.role
    })

    /* 玩家血量及护甲 */
    let health = new HS_HEALTH()

    /* 玩家法力水晶 */
    let mana = new HS_MANA()

    /* 当前是否玩家的回合 */
    let isOwnRound = false

    this.setProps({
      id,
      name,
      role,
      health,
      mana,
      isOwnRound
    })
  }

  /* 改变当前的玩家回合 */
  changeOwnRound (status) {
    this.setProps({
      isOwnRound: status
    })
  }

  /* 初始化新回合的法力水晶 */
  initRoundCrystal () {
    let {mana} = this

    mana.initRoundCrystal()
  }
}

module.exports = HS_PLAYER
