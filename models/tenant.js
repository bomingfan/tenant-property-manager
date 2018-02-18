const bcrypt = require("bcrypt-nodejs");

module.exports = function(sequelize, DataTypes) {
 
    var Tenant = sequelize.define('Tenant', {
 
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
            unique: true,
            validate: {
                isEmail: true
            }
        },
 
        password: {
            type: DataTypes.STRING,
            allowNull: false
        }
    });

    Tenant.beforeCreate(function(model, options){
        return new Promise (function(resolve, reject){
            bcrypt.hash(model.password, null, null, function(err, hash) {
                if(err) return reject(err);
                model.password = hash;
                return resolve(model, options);
            });
        });
      });

    Tenant.associate = function(models) {
        // We're saying that a tenant should belong to a landlord
        // A Post can't be created without a landlord due to the foreign key constraint
        Tenant.belongsTo(models.Landlord, {
          foreignKey: {
            allowNull: false
          }
        });
      };
    
    Tenant.associate = function(models) {
        // Associating Landlord with Tenant
        // When a Landlord is deleted, also delete any associated Tenants
        Tenant.hasMany(models.Ticket, {
          onDelete: "cascade"
        });
      };
 
    return Tenant;
 
};