import DB from '../database';
import sequelize from '../database/config/sequelize';
import associate from '../database/relationships';

// Connect to the database and log a message to the console
const connectDB = async () => {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully🔥');

    // Synchronize the database with the models  without need of dropping the tables
    await DB.sequelize.sync({
      force: false,
    });

    associate(); // Call the associate function to create the relationships between the models
  } catch (error) {
    console.error('Unable to connect to the database:', error);
    process.exit(1); // Exit the process if the connection is not successful
  }
};

export default connectDB;
