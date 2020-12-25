'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn("Tasks", "projectId", {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: {
          tableName: "Projects"
        },
        key: "id"
      }
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn("Tasks", "projectId");
  }
};
