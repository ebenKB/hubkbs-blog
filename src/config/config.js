// create the congiguration file for the system  critical data
let config = {}

if (process.env.NODE_ENV === 'development') {
  config = {
    port: 8000,
    db: process.env.MONGODB_URI,
    accessKeyId: process.env.accessKeyId,
    secretAccessKey: process.env.secretAccessKey,
    // bucketName: 'hubkbs-blog',
    // dirName: 'posts',
    // region: 'US East (Ohio)',
  };
} else if (process.env.NODE_ENV === 'production') {
  config = {
    port: process.env.port,
    db: process.env.MONGODB_URI,
    accessKeyId: process.env.accessKeyId,
    secretAccessKey: process.env.secretAccessKey,
    bucketName: 'hubkbs-blog',
    dirName: 'posts',
    region: 'US East (Ohio)',
  };
} else {
  config = {
    port: process.env.port,
    db: process.env.MONGODB_URI,
    accessKeyId: process.env.accessKeyId,
    secretAccessKey: process.env.secretAccessKey,
    bucketName: 'apostlite',
    dirName: 'test',
    region: 'US East (Ohio)',
  };
}
export default config;
