module.exports = ( sequelize, DataTypes) => {
    const Role = sequelize.define(
      'Role', 
      {
        id: {
          type: DataTypes.INTEGER,
          allowNull: false,
          primaryKey: true,
          autoIncrement: true
        },
        name: {
          type: DataTypes.STRING,
          allowNull: false
        }
    }, {
        tableName: "roles",
        timestamps: false,
        underscored: true
    });

    Role.associate = (Models) =>{
      const { User } = Models;

      Role.hasMany(User, {
        foreignKey: "rol_id",
        constraints: true
      });
    }
    return Role;
}








