/**
 * 核心类
 */

const HS_INNING = require('./modules/inning')

class HS_CORE {
  constructor (options = {}) {
    /* 初始化玩家 */
    this.players = options.players || []

    /* 当前的一局游戏 */
    this.inning = null
  }

  /* 新的一局游戏 */
  newInning () {
    this.inning = new HS_INNING({
      players: this.players
    })
  }

  /* 进入下个回合 */
  nextRound () {
    this.inning.nextRound()
  }
}

module.exports = HS_CORE
