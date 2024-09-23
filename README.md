# Express.js, PostgreSQL, and Sequelize CLI Setup

This repository contains a production-ready setup for an Express.js application with PostgreSQL and Sequelize ORM.

## 🚀 Features

- Express.js server setup
- PostgreSQL database integration
- Sequelize ORM configuration
- Babel for ES6+ support
- Nodemon for development
- Environment-based database configuration

## 📋 Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js 16.x or higher
- npm 6.x or higher
- PostgreSQL installed locally

## 🛠️ Installation

1. Clone the repository:

   ```
   git clone https://github.com/leandreAlly/express-postgres-sequelize-setup
   ```

2. Navigate to the project directory:

   ```
   cd express-postgres-sequelize-setup
   ```

3. Install the dependencies:

   ```
   npm install
   ```

4. Create a `.env` file in the root directory and add your database configuration:
   ```
   DATABASE_URL=postgresql://<USER>:<PASSWORD>@localhost:5432/<DATABASENAME>
   ```

## 🚦 Usage

To start the development server:

```
npm run dev
```

The server will start on `http://localhost:3000` (or the port specified in your environment variables).

## 📁 Project Structure

```
express-app/
├── src/
│   ├── controllers/
│   ├── database/
│   │   ├── config/
│   │   ├── models/
│   │   ├── migrations/
│   │   └── seeders/
│   ├── routes/
│   ├── services/
│   ├── utils/
│   ├── app.js
│   └── server.js
├── .babelrc
├── .env
├── .gitignore
├── .sequelizerc
├── package.json
└── README.md
```

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check [issues page](https://github.com/leandreAlly/express-postgres-sequelize-setup/issues/new).

## 📝 License

This project is [MIT](https://github.com/leandreAlly/express-postgres-sequelize-setup/blob/main/LICENSE) licensed.

## 👨‍💻 Author

**LEANDRE ALLY**

- Website: [leandre-ally](https://leandre-ally-portfolio.vercel.app/)
- Twitter: [@ally](https://x.com/mr_ally_01)
- Github: [@leandreally](https://github.com/leandreally)

## 🙏 Acknowledgements

- [Express.js](https://expressjs.com/)
- [Sequelize](https://sequelize.org/)
- [PostgreSQL](https://www.postgresql.org/)
