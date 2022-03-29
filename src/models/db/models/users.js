module.exports = ( sequelize, DataTypes) => {
    const User = sequelize.define(
      'User', 
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
        },
        lastname: {
          type: DataTypes.STRING,
          allowNull: false
        },
        username: {
          type: DataTypes.STRING,
          allowNull: false,
          unique: true
        },
        password: {
          type: DataTypes.STRING,
          allowNull: false
        },
        photo: {
          type: DataTypes.STRING,
          allowNull: true
        },
        phone: {
          type: DataTypes.STRING,
          allowNull: true
        },
        token: {
          type: DataTypes.STRING,
          allowNull: true
        },
        last_activity_at: {
          type: DataTypes.DATE,
          allowNull: true
        },
        enabled: {
          type: DataTypes.BOOLEAN,
          allowNull: false,
          defaultValue: true
        },
        rol_id: {
          type: DataTypes.INTEGER,
          allowNull: false,
          references: {
            model: "roles",
            key: "id"
          }
        },
        company_id: {
          type: DataTypes.INTEGER,
          allowNull: false,
        },
        created_at: {
          type: DataTypes.DATE
        }
    }, {
        tableName: "users",
        timestamps: false,
        underscored: true
    });

    User.associate = (Models) =>{
      const { Role } = Models;

      User.belongsTo(Role, {
        foreignKey: "rol_id",
        constraints: true,
        as: "role"
      });
    }
    return User;
}








