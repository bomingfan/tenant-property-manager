module.exports = function(sequelize, DataTypes) {
    var Bulletin = sequelize.define("Bulletin", {
      title: {
        type: DataTypes.STRING,
        allowNull: false
      },
      body: {
        type: DataTypes.TEXT,
        allowNull: false
      }
    });

    Bulletin.associate = function(models) {
        // We're saying that a tenant should belong to a landlord
        // A Post can't be created without a landlord due to the foreign key constraint
        Bulletin.belongsTo(models.Landlord, {
          foreignKey: {
            allowNull: false
          }
        });
      };


    return Bulletin;
  };
  