/**
 * 游戏局类
 */

const HS_BASE = require('../base')
const HS_PLAYER = require('../player')
const HS_ROUND = require('../round')

class HS_INNING extends HS_BASE {
  constructor (options = {}) {
    super()

    /* 玩家 */
    let players = options.players.map((player) => new HS_PLAYER(player))

    /* 回合 */
    let rounds = new HS_ROUND({players})

    this.setProps({
      players,
      rounds
    })
  }

  /* 进入下个回合 */
  nextRound () {
    this.rounds.nextRound()
  }
}

module.exports = HS_INNING
