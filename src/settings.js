module.exports = {

  /**
   * @type {string}
   * @description 显示在浏览器tab页上的标题
   */
  appTitle: 'Antz',

  /**
   * @type {string}
   * @description 显示在侧边栏logo区域的图标
   */
  logoImage: 'applogo.png',

  /**
   * @type {string}
   * @description 显示在侧边栏logo区域的系统名称
   */
  logoTitle: 'Antz后台管理系统',

  /**
   * @type {number} 0，1，2，3，4
   * @description 用户密码的强度级别，后台应用也需要配合进行设置检查。取值包括：
   * 0- 不做要求
   * 1-最少8位；
   * 2-最少8位，并且是数字与字母组合
   * 3-最少8位，并且必须是数据、大写字母与小写字母的组合；
   * 4-最少8位，并且是数字、大写字母、小写字母与特殊字符的组合；
   */
  passwordLevel: 0,

  /**
   * @type {boolean} true | false
   * @description 控制是否固定应用的header栏
   */
  fixedHeader: false,

  /**
   * @type {boolean} true | false
   * @description 控制是否显示侧边栏的logo区域
   */
  sidebarLogo: true
}
