import { color } from '../utils/theme'

const Mock = require('mockjs')
const config = require('../utils/config')

const { apiPrefix } = config

const Dashboard = Mock.mock({
  numbers: [
    {
      icon: 'pay-circle-o',
      color: color.green,
      title: 'Online Review',
      number: 2781,
    }, {
      icon: 'team',
      color: color.blue,
      title: 'New Customers',
      number: 3241,
    }, {
      icon: 'message',
      color: color.purple,
      title: 'Active Projects',
      number: 253,
    }, {
      icon: 'shopping-cart',
      color: color.red,
      title: 'Referrals',
      number: 4324,
    },
  ],
})

module.exports = {
  [`GET ${apiPrefix}/dashboard`] (req, res) {
    res.json(Dashboard)
  },
}
