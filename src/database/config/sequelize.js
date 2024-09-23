import dotenv from 'dotenv';
import { Sequelize } from 'sequelize';

dotenv.config();

// Extract the environment variables and assign them to the variables
const { NODE_ENV, DATABASE_URL, DEV_DATABASE_URL, TEST_DATABASE_URL } =
  process.env;
let url =
  NODE_ENV === 'development'
    ? DEV_DATABASE_URL
    : NODE_ENV === 'test'
    ? TEST_DATABASE_URL
    : DATABASE_URL;

// Create a new instance of Sequelize and pass the database URL
const sequelize = new Sequelize(String(url), {
  timezone: '+09:00',
  define: {
    charset: 'utf8mb4',
    collate: 'utf8mb4_general_ci',
    underscored: false,
    freezeTableName: true,
  },
  pool: {
    //explain this line of code? this means that the connection pool will have a minimum of 0 connections and a maximum of 5 connections
    min: 0,
    max: 5,
  },
  logQueryParameters: NODE_ENV === 'development', // this line of code will log the query parameters if the environment is development
  benchmark: true,
});

export default sequelize;
