const helper = require('../src/helper')
const HS_GAME = require('../src')

const debug = input => console.log(helper.cloneObj(input))

let players = [
  {
    id: 'playerId1',
    name: '1P',
    role: 'mage'
  },
  {
    id: 'playerId2',
    name: '2p',
    role: 'warrior'
  }
]
let game = HS_GAME({players})
game.newInning()

game.nextRound()
debug(game)

game.nextRound()
debug(game)

game.nextRound()
debug(game)
