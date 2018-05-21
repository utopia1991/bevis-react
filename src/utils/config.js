const APIV1 = '/api/v1'

module.exports = {
  name: 'FES 自动化工具',
  prefix: 'antdAdmin',
  footerText: 'FES Toolbox Platform © 2018 Wangsu',
  logo: '/logo.svg',
  CORS: [],
  openPages: ['/login'],
  apiPrefix: '/api/v1',
  APIV1,
  api: {
    userLogin: `${APIV1}/user/login`,
    userLogout: `${APIV1}/user/logout`,
    userInfo: `${APIV1}/userInfo`,
    users: `${APIV1}/users`,
    posts: `${APIV1}/posts`,
    user: `${APIV1}/user/:id`,
    dashboard: `${APIV1}/dashboard`,
    menus: `${APIV1}/menus`,
    v1test: `${APIV1}/test`,
  },
}
