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

    /* 当前的一局游戏 */
    let inning

    this.setProps({
      players,
      inning
    })
  }

  /* 新的一局游戏 */
  newInning () {
    let {players} = this
    let inning = new HS_INNING({players})

    this.setProps({inning})
  }

  /* 进入下个回合 */
  nextRound () {
    let {inning} = this

    inning.nextRound()
  }
}

module.exports = HS_CORE
