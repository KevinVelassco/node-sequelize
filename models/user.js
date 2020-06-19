'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
          len: {
              args: [{min:8, max: undefined}],
              msg: "The name must have at least 8 characters"
          }            
      }
    },
    email:{
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,      
      validate: {
          isEmail: true
      }
    },
    identification: {
      type: DataTypes.INTEGER,
      allowNull: false,
      unique: true,
      validate:{
          isNumeric: {
              msg: "the identification must be numeric"
          }            
      }
    },
    phone: {
      type: DataTypes.INTEGER,
      validate:{
          isNumeric: {
              msg: "the phone must be numeric"
          } 
      }
    }
  }, {});
  User.associate = function(models) {
    // associations can be defined here
  };
  return User;
};