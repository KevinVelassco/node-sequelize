'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
          notNull: {
            msg: 'The name field is required'
          },
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
          notNull: {
            msg: 'The emial field is required'
          },
          isEmail: true
      }
    },
    identification: {
      type: DataTypes.INTEGER,
      allowNull: false,
      unique: true,
      validate:{
          notNull: {
            msg: 'The identification field is required'
          },
          isNumeric: {
              msg: "the identification must be numeric"
          }            
      }
    },
    phone: {
      type: DataTypes.INTEGER,
      unique: true,
      validate:{
          isNumeric: {
              msg: "the phone must be numeric"
          } 
      }
    }
  }, {});
  User.associate = function(models) {
    User.belongsToMany(models.Project,{
      through: "userprojects",
      as: "projects",
      foreignKey: "userId"
    })
  };
  return User;
};