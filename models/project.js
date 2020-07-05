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
    },
    categoryId:{
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'The category field is required'
        },
        notEmpty: {
          msg: "The category field is required"
        }
      }      
    }
  }, {});
  Project.associate = function(models) {
    Project.hasMany(models.Task, {
      foreignKey: "projectId",
      as: "tasks"
    });

    Project.belongsTo(models.Category, {
      foreignKey: "categoryId"
    });

    Project.belongsToMany(models.User,{
      through: "userprojects",
      as: "users",
      foreignKey: "projectId"
    })
  };
  return Project;
};