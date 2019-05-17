// create the congiguration file for the system  critical data
let config = {}

if (process.env.NODE_ENV == "development") {
  console.log('using the development settings');
  config = {
    port: 8000,
    db: process.env.MONGODB_URI,
    // host: process.env.host,
  };
} else if(process.env.NODE_ENV == "production") {
  console.log('using the production settings');
  config = {
    port: process.env.port,
    db: process.env.MONGODB_URI,
  };
} else {
  console.log('using default settings')
  config = {
    port: process.env.port,
    db: process.env.MONGODB_URI,
  };
}
export default config;
