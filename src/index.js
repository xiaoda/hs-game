/**
 * HS Game 入口文件
 */

const helper = require('./helper')
const HS_CORE = require('./modules/core')

const HS_GAME = (...params) => new HS_CORE(...params)

HS_GAME.core = HS_CORE

module.exports = HS_GAME
