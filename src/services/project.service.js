import DB from '../database';

const { Projects } = DB;

export class ProjectService {
  static async createProject(data) {
    return Projects.create(data);
  }

  static async getProjectsByUserId(userId) {
    return Projects.findAll({
      where: { userId },
      include: [
        {
          model: DB.Users,
          as: 'user',
          attributes: ['name', 'email'],
        },
      ],
      order: [['createdAt', 'DESC']],
    });
  }
}
