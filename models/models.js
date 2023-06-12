const sequelize = require('../config/db')
const {DataTypes} = require('sequelize')

const Dog = sequelize.define('dog', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, unique: true, allowNull: false},
    color: {type: DataTypes.STRING, allowNull: false},
    tail_length:{type: DataTypes.INTEGER, allowNull: false},
    weight: {type: DataTypes.INTEGER, allowNull: false},
})

module.exports = {Dog}