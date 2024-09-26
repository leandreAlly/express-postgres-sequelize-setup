import DB from '../database';

const { Users } = DB;

export class UserService {
  static async createUser(data) {
    return Users.create(data);
  }

  static async getAllUsers() {
    return Users.findAll({
      order: [['createdAt', 'DESC']],
    });
  }

  static async getUserById(id) {
    return Users.findByPk(id);
  }
}
