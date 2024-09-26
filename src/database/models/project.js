import { DataTypes, Model } from 'sequelize';
import sequelize from '../config/sequelize';

class Projects extends Model {}

const ProjectsModel = () => {
  Projects.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        type: DataTypes.STRING,
      },
      description: {
        type: DataTypes.STRING,
      },
      userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'Users',
          key: 'id',
        },
      },
    },
    {
      sequelize,
      modelName: 'projects',
      tableName: 'projects',
      timestamps: false,
    }
  );

  return Projects;
};

export default ProjectsModel;
