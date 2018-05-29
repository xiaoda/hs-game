/**
 * 游戏局类
 */

const HS_PLAYER = require('../player')

class HS_INNING {
  constructor (options = {}) {
    /* 玩家 */
    this.players = options.players.map((player) => new HS_PLAYER(player))

    /* 当前回合 */
    this.currentRound = 0

    /* 当前回合玩家 */
    this.activePlayer = null
    this.inactivePlayer = null
  }

  /* 进入下个回合 */
  nextRound () {
    this.currentRound ++

    switch (this.currentRound) {
      case 1:
        [this.activePlayer, this.inactivePlayer] = this.players
        break

      default:
        [this.activePlayer, this.inactivePlayer] = [this.inactivePlayer, this.activePlayer]
    }

    this.activePlayer.initRoundCrystal()
    this.activePlayer.changeOwnRound(true)
    this.inactivePlayer.changeOwnRound(false)
  }
}

module.exports = HS_INNING
