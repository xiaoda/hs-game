/**
 * 角色类
 */

const HS_BASE = require('../base')

const ROLES_MAP = {
  warrior: '战士',
  mage:    '法师',
  preist:  '牧师',
  rouge:   '盗贼',
  paladin: '圣骑士',
  warlock: '术士',
  druid:   '德鲁伊',
  hunter:  '猎人',
  shaman:  '萨满'
}

class HS_ROLE extends HS_BASE {
  constructor (options = {}) {
    super()

    /* 角色ID */
    let roleId = options.role

    /* 角色名称 */
    let roleName = ROLES_MAP[roleId]

    this.setProps({
      roleId,
      roleName
    })
  }
}

module.exports = HS_ROLE
