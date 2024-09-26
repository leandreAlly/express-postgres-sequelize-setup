import sequelize from './config/sequelize';
import ProjectsModel from './models/project';
import UsersModel from './models/user';

const DB = {
  sequelize,
  Users: UsersModel(sequelize),
  Projects: ProjectsModel(sequelize),
};

export default DB;
