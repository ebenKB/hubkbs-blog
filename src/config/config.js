
// create the congiguration file for the system  critical data
const config = {
  port: process.env.port || 8000,
  db: process.env.MONGODB_URI,
  host: process.env.host,
};

export default config;
