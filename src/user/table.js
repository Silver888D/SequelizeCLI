const {DataTypes} = require('sequelize');
const {sequelize} = require('../db/connection');

const User = sequelize.define('User',{
    name:{
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate:{allowNull :false, unique:true}
    },
    password:{
    type: DataTypes.STRING, allowNull:false, validate:{allowNull:false}}
});

module.exports = User;