'use strict';
module.exports = (sequelize, DataTypes) => {
  const Category = sequelize.define('Category', {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      validate:{
        notNull: {
          msg: 'The title field is required'
        },
        notEmpty: {
          msg: "The title field is required"
        },
        len: {
          args: [5,20],
          msg: "The title must have between 5 and 20 characters."
        }
      }
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'The description field is required'
        },
        notEmpty: {
          msg: "The description field is required"
        },
        len: {
          args: [20,undefined],
          msg: "The description must have at least 20 characters"
        }
      }      
    },
    alias: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate:{
        notNull: {
          msg: 'The alias field is required'
        },
        notEmpty: {
          msg: "The alias field is required"
        },
        len: {
          args: [1,8],
          msg: "The alias must have a maximum of 8 characters."
        }
      }
    },
    color: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate:{
        notNull: {
          msg: 'The color field is required'
        },
        notEmpty: {
          msg: "The color field is required"
        }
      }      
    },
  }, {});
  Category.associate = function(models) {
    // associations can be defined here
  };
  return Category;
};