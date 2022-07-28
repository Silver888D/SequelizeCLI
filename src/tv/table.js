const {DataTypes} = require('sequelize');
const {sequelize} = require('../db/connection');

const Tv = sequelize.define('Tv',{
    title:{
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    actor:{type: DataTypes.STRING,
        defaultValue: 'Not Specified',
    },
});

module.exports = Tv;