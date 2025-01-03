/** @format */

module.exports = {
  apps: [
    {
      name: "smart_portfolio",
      script: "npm run start",
      autorestart: true,
      watch: false,
      max_memory_restart: "300M",
      port: 3002,
      env_production: {
        NODE_ENV: "production",
      },
    },
  ],
};
