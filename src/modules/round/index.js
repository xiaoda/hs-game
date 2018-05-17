/**
 * 游戏局类
 */

const helper = require('../../helper')
const HS_BASE = require('../base')

class HS_ROUND extends HS_BASE {
  constructor (options = {}) {
    super()

    /* 玩家 */
    let players = options.players || []

    /* 当前回合 */
    let currentRound = 0

    /* 当前回合玩家 */
    let activePlayer
    let inactivePlayer

    this.setProps({
      players,
      currentRound,
      activePlayer,
      inactivePlayer
    })
  }

  /* 进入下个回合 */
  nextRound () {
    let {
      players,
      currentRound,
      activePlayer,
      inactivePlayer
    } = this

    currentRound ++

    switch (currentRound) {
      case 1:
        activePlayer = players[0]
        inactivePlayer = players[1]
        break

      default:
        [activePlayer, inactivePlayer] = [inactivePlayer, activePlayer]
    }

    activePlayer.initRoundCrystal()
    activePlayer.changeOwnRound(true)
    inactivePlayer.changeOwnRound(false)

    this.setProps({
      currentRound,
      activePlayer,
      inactivePlayer
    })
  }
}

module.exports = HS_ROUND
