/**
 * 核心类
 */

const HS_BASE = require('./base')
const HS_INNING = require('./inning')

class HS_CORE extends HS_BASE {
  constructor (options = {}) {
    super()

    /* 初始化玩家 */
    let players = options.players || []

    /* 初始化一局游戏 */
    let inning = new HS_INNING({players})

    this.setProps({
      players,
      inning
    })
  }

  /* 进入下个回合 */
  nextRound () {
    this.inning.nextRound()
  }
}

module.exports = HS_CORE
