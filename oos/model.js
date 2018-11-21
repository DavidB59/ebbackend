const Sequelize = require('sequelize')
const sequelize = require('../db')

const OOS = sequelize.define('oos', {
  title: {
    type: Sequelize.STRING,
    field: 'title',
    allowNull: false
  },
  price: {
    type: Sequelize.INTEGER,
    field: 'price',
    allowNull : false
  },
  email: {
    type: Sequelize.STRING,
    field: 'email',
    allowNull : false
  }, 
  phone: {
    type: Sequelize.STRING,
    field: 'phone',
    allowNull : true
  },
  description: {
    type: Sequelize.STRING,
    field: 'description',
    allowNull : true
  },
  picture: {
    type: Sequelize.STRING,
    field: 'pricture',
    allowNull : true
  }
}, {
  timestamps: false,
  tableName: 'oos'
})


module.exports = OOS