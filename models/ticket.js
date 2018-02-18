module.exports = function(sequelize, DataTypes) {
    var Ticket = sequelize.define("Ticket", {
      title: {
        type: DataTypes.STRING,
        allowNull: false
      },
      body: {
        type: DataTypes.TEXT,
        allowNull: false
      }
    });

    Ticket.associate = function(models) {
        // We're saying that a tenant should belong to a landlord
        // A Post can't be created without a landlord due to the foreign key constraint
        Ticket.belongsTo(models.Tenant, {
          foreignKey: {
            allowNull: false
          }
        });
      };


    return Ticket;
  };
  