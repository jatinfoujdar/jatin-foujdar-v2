module.exports = {
  reactStrictMode: true,
  webpack: (config) => {
    // Custom webpack configuration can go here
    return config;
  },
  images: {
    domains: ['example.com'], // Add your image domains here
  },
};
