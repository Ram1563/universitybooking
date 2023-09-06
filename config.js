module.exports = {
    database: {
      url: ' postgresql://ram:lac1SF3eyRnnF-6OadXQEA@bouncy-cyclops-6119.8nk.cockroachlabs.cloud:26257/defaultdb?sslmode=verify-full'},
    server: {
      port: process.env.PORT || 3000,
    },
    
  jwtSecret: 'your-secret-key', // Replace with a strong secret key for JWT

    // Add other configurations as needed
  };
  