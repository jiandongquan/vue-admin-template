/**
 * Created by PanJiaChen on 16/11/18.
 */

/**
 * @param {string} path
 * @returns {Boolean}
 */
export function isExternal(path) {
  return /^(https?:|mailto:|tel:)/.test(path)
}

/**
 * @param {string} str
 * @returns {Boolean}
 */
export function validUsername(str) {
  const valid_map = ['admin', 'editor']
  return valid_map.indexOf(str.trim()) >= 0
}

/**
 * @param {string} str
 * @returns {Boolean}
 * @description 校验用户密码是否符合密码级别1的要求：最少8位，并且包含数字与字母组合
*/
export function validatePasswordLevel2(str) {
  const reg = new RegExp(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/)
  return reg.test(str)
}

/**
 * @param {string} str
 * @returns {Boolean}
 * @description 校验用户密码是否符合密码级别2的要求：最少8位，并且必须是数字、大写字母与小写字母的组合；
*/
export function validatePasswordLevel3(str) {
  const reg = new RegExp(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[^]{8,}$/)
  return reg.test(str)
}

/**
 * @param {string} str
 * @returns {Boolean}
 * @description 校验用户密码是否符合密码级别2的要求：最少8位，并且必须是数字、大写字母、小写字母和特殊字符的组合；
*/
export function validatePasswordLevel4(str) {
  const reg = new RegExp(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,}/)
  return reg.test(str)
}

