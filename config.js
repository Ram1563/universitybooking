const { Sequelize } = require('sequelize');

module.exports = {
  database: {
    dialect: 'postgres',
    host: 'bouncy-cyclops-6119.8nk.cockroachlabs.cloud',
    port: 26257,
    username: 'ram',
    password: 'lac1SF3eyRnnF-6OadXQEA',
    database: 'defaultdb',
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false, // Use this if your CockroachDB doesn't have a valid CA certificate
        ca: 'path/to/ca.crt', // Specify the path to your CA certificate
      },
    },
    // Add your actual database URL here
    url: 'postgresql://ram:lac1SF3eyRnnF-6OadXQEA@bouncy-cyclops-6119.8nk.cockroachlabs.cloud:26257/defaultdb?sslmode=require',
  },
  server: {
    port: process.env.PORT || 3000,
  },
  jwtSecret: 'your-secret-key', // Replace with a strong secret key for JWT
  // Add other configurations as needed
};
