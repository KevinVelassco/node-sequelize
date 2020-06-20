'use strict';
module.exports = (sequelize, DataTypes) => {
  const Project = sequelize.define('Project', {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: {
          args: [5, 20],
          msg: "The title must have between 5 and 20 characters."
        }
      }
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false
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