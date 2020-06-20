'use strict';
module.exports = (sequelize, DataTypes) => {
  const Project = sequelize.define('Project', {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'The title field is required'
        },
        len: {
          args: [5, 20],
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
    state: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true
    }
  }, {});
  Project.associate = function(models) {
    // associations can be defined here
  };
  return Project;
};