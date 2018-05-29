/**
 * 职业类
 */

const CONST = require('../../const')

class HS_ROLE {
  constructor (options = {}) {
    /* 职业ID */
    this.role = options.role.toUpperCase()

    /* 职业名称 */
    this.roleName = CONST.ROLES_MAP[this.role]
  }
}

module.exports = HS_ROLE
