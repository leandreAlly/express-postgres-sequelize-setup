import { DataTypes, Model } from 'sequelize';
import sequelize from '../config/sequelize';

class Users extends Model {}

const UsersModel = () => {
  Users.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        type: DataTypes.STRING,
      },
      email: {
        type: DataTypes.STRING,
      },
    },
    {
      sequelize,
      modelName: 'Users',
      tableName: 'users',
      timestamps: false,
    }
  );

  return Users;
};

export default UsersModel;
