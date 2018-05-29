/**
 * HS Game 入口文件
 */

const helper = require('./helper')
const HS_CORE = require('./core')

const HS_GAME = (...params) => new HS_CORE(...params)

HS_GAME.Core = HS_CORE

module.exports = HS_GAME
