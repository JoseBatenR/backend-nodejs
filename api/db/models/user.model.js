const { Model, DataTypes, Sequelize } = require('sequelize');
const USER_TABLE = 'users';

const UserSchema = {
  id: {
    type: DataTypes.UUIDV4,
    defaultValue:  DataTypes.UUIDV4,
    allowNull: false,
    primaryKey: true
  },
  email: {
    allowNull: false,
    type: DataTypes.STRING,
    unique: true
  },
  password: {
    allowNull: false,
    type: DataTypes.STRING
  },
  createdAt: {
    allowNull: false,
    type: DataTypes.DATE,
    field: 'create_at',
    defaultValue: Sequelize.literal('NOW()')
  }
}
class User extends Model {
  static associate() {

  }
  static config(sequelize) {
    return {
      sequelize,
      tableName: USER_TABLE,
      modelName: 'User',
      timestamps: false
    }
  }
}
module.exports = { USER_TABLE, UserSchema, User }
