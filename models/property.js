module.exports = function(sequelize, DataTypes) {
    var Property = sequelize.define("Property", {
      street: {
        type: DataTypes.STRING,
        allowNull: false
      },
      unit: {
        type: DataTypes.STRING,
        allowNull: false
      },
      city: {
        type: DataTypes.STRING,
        allowNull: false
      },
      state: {
        type: DataTypes.STRING,
        allowNull: false
      },
      zip: {
        type: DataTypes.STRING,
        allowNull: false
      },
      title1: {
        type: DataTypes.STRING,
        allowNull: true,
        defaultValue: null
      },
      body1: {
        type: DataTypes.TEXT,
        allowNull: true,
        defaultValue: null
      },
      title2: {
        type: DataTypes.STRING,
        allowNull: true,
        defaultValue: null
      },
      body2: {
        type: DataTypes.TEXT,
        allowNull: true,
        defaultValue: null
      },
      title3: {
        type: DataTypes.STRING,
        allowNull: true,
        defaultValue: null
      },
      body3: {
        type: DataTypes.TEXT,
        allowNull: true,
        defaultValue: null
      }
    });

    Property.associate = function(models) {
        // We're saying that a tenant should belong to a landlord
        // A Post can't be created without a landlord due to the foreign key constraint
        Property.belongsTo(models.Landlord, {
          foreignKey: {
            allowNull: false
          }
        });
      };

    Property.associate = function(models) {
        // Associating Landlord with Tenant
        // When a Landlord is deleted, also delete any associated Tenants
        Property.hasMany(models.Tenant, {
          onDelete: "cascade"
        });
      };


    return Property;
  };
  