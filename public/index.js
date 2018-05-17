const helper = require('../src/helper')
const HS_GAME = require('../src')

const debug = input => console.log(helper.cloneObj(input))

let players = [
  {
    id: 'playerId9527',
    name: 'xiaoda',
    role: 'mage'
  },
  {
    id: 'playerId357',
    name: '357',
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
