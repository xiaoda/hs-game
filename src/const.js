/**
 * 全局常量
 */

/* 职业标识 */
const ROLE_WARRIOR = 'WARRIOR'
const ROLE_MAGE = 'MAGE'
const ROLE_PREIST = 'PREIST'
const ROLE_ROUGE = 'ROUGE'
const ROLE_PALADIN = 'PALADIN'
const ROLE_WARLOCK = 'WARLOCK'
const ROLE_DRUID = 'DRUID'
const ROLE_HUNTER = 'HUNTER'
const ROLE_SHAMAN = 'SHAMAN'

/* 职业标识名称映射 */
const ROLES_MAP = {
  [ROLE_WARRIOR]: '战士',
  [ROLE_MAGE]:    '法师',
  [ROLE_PREIST]:  '牧师',
  [ROLE_ROUGE]:   '盗贼',
  [ROLE_PALADIN]: '圣骑士',
  [ROLE_WARLOCK]: '术士',
  [ROLE_DRUID]:   '德鲁伊',
  [ROLE_HUNTER]:  '猎人',
  [ROLE_SHAMAN]:  '萨满'
}

module.exports = {
  ROLE_WARRIOR, ROLE_MAGE, ROLE_PREIST,
  ROLE_ROUGE, ROLE_PALADIN, ROLE_WARLOCK,
  ROLE_DRUID, ROLE_HUNTER, ROLE_SHAMAN,

  ROLES_MAP
}
