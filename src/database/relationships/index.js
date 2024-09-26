import DB from '../index';

const associate = () => {
  DB.Users.hasMany(DB.Projects, {
    foreignKey: 'userId',
    as: 'projects',
  });

  DB.Projects.belongsTo(DB.Users, {
    foreignKey: 'userId',
    as: 'user',
  });
};

export default associate;
