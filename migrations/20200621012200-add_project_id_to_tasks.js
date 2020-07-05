'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {    
    return queryInterface.addColumn("tasks", "projectId", {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: {
          tableName: "projects"
        },
        key: "id"
      }
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn("tasks", "projectId");
  }
};
