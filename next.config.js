

// next.config.js

module.exports = {
  reactStrictMode: true,
  async redirects() {
    return [
      // Redirect root path "/" to the login page
      {
        source: '/',
        destination: '/login', // Set the destination to your login page
        permanent: false, // Set to true if you want a permanent (301) redirect
      },
    ];
  },
  
};
