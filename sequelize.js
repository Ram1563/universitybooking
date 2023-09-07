// sequelize.js

const { Sequelize } = require('sequelize');
const config = require('./config'); // Import your configuration

const sequelize = new Sequelize(config.database.url, {
  dialect: config.database.dialect, // 'postgres' or 'cockroachdb'
  dialectOptions: {
    ssl: {
      rejectUnauthorized: false, // Disable SSL certificate verification (not recommended for production)
      // You may also need to provide the path to your CA certificate file
      // ca: 'path_to_ca_certificate_file.pem', // Path to your CA certificate file
    },
  },
  // Other Sequelize options as needed
});

// Test the database connection
sequelize.authenticate()
  .then(() => {
    console.log('Database connection established.');
  })
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  });

module.exports = sequelize;
// Add this to your Sequelize configuration
logging: console.log
