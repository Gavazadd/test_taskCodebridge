const sequelize = require('../config/db')
const {DataTypes} = require('sequelize')

const Dog = sequelize.define('dog', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, allowNull: false},
    color: {type: DataTypes.STRING, allowNull: false},
    tail_length:{type: DataTypes.FLOAT, allowNull: false},
    weight: {type: DataTypes.FLOAT, allowNull: false},
})

module.exports = {Dog}