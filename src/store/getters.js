const getters = {
  sidebar: state => state.app.sidebar,
  device: state => state.app.device,
  token: state => state.user.token,
  avatar: state => state.user.avatar,
  name: state => state.user.name,
  roles: state => state.user.roles,
  permission_routes: state => state.permission.routes,
  logoTitle: state => state.settings.logoTitle,
  logoImage: state => state.settings.logoImage,
  passwordLevel: state => state.user.passwordLevel
}
export default getters
