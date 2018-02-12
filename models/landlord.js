module.exports = function(sequelize, DataTypes) {
 
    var Landlord = sequelize.define('Landlord', {
 
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER
        },
 
        firstname: {
            type: DataTypes.STRING,
            notEmpty: true
        },
 
        lastname: {
            type: DataTypes.STRING,
            notEmpty: true
        },
 
        address: {
            type: DataTypes.TEXT,
            notEmpty: true
        },
 
        email: {
            type: DataTypes.STRING,
            validate: {
                isEmail: true
            }
        },
 
        password: {
            type: DataTypes.STRING,
            allowNull: false
        },
 
    });
 
    Landlord.associate = function(models) {
        // Associating Landlord with Tenant
        // When a Landlord is deleted, also delete any associated Tenants
        Landlord.hasMany(models.Tenant, {
          onDelete: "cascade"
        });
      };

    return Landlord;
 
};