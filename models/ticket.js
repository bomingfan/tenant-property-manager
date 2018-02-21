module.exports = function(sequelize, DataTypes) {
    var Ticket = sequelize.define("Ticket", {
      title: {
        type: DataTypes.STRING,
        allowNull: false
      },
      body: {
        type: DataTypes.TEXT,
        allowNull: false
      },
      resolved: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
      }
    });

    Ticket.associate = function(models) {
        // We're saying that a tenant should belong to a landlord 
        Ticket.belongsTo(models.Tenant, {
          foreignKey: {
            allowNull: false
          }
        });
      };

    Ticket.associate = function(models) {
        // We're saying that a tenant should belong to a landlord 
        Ticket.belongsTo(models.Landlord, {
          foreignKey: {
            allowNull: false
          }
        });
      };


    return Ticket;
  };
  