'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn("projects", "categoryId", {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: {
          tableName: "categories"
        },
        key: "id"
      }
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn("projects", "categoryId");
  }
};
