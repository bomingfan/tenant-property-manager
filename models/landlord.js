const bcrypt = require("bcrypt-nodejs");

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
            unique: true,
            validate: {
                isEmail: {
                    msg: "Email address must be valid"
                }
            }
        },
 
        password: {
            type: DataTypes.STRING,
            allowNull: false
        },
 
    });

    Landlord.beforeCreate(function(model, options){
        return new Promise (function(resolve, reject){
            bcrypt.hash(model.password, null, null, function(err, hash) {
                if(err) return reject(err);
                model.password = hash;
                return resolve(model, options);
            });
        });
      });
 
    Landlord.associate = function(models) {
        // Associating Landlord with Tenant
        // When a Landlord is deleted, also delete any associated Tenants
        Landlord.hasMany(models.Tenant, {
          onDelete: "cascade"
        });
      };

    // Landlord.associate = function(models) {
    //     // Associating Landlord with Tenant
    //     // When a Landlord is deleted, also delete any associated Bulletin
    //     Landlord.hasMany(models.Bulletin, {
    //       onDelete: "cascade"
    //     });
    //   };

    return Landlord;
 
};