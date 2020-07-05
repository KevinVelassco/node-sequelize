'use strict';
module.exports = (sequelize, DataTypes) => {
  const UserProjects = sequelize.define('UserProjects', {
    userId: DataTypes.INTEGER,
    projectId: DataTypes.INTEGER
  }, {});
  UserProjects.associate = function(models) {
    // associations can be defined here
  };
  return UserProjects;
};