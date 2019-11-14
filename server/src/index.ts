import * as cluster from 'cluster';
import * as os from 'os';
import * as dotenv from 'dotenv';
import Server from './web-server';

dotenv.config();
const { PORT } = process.env;
const parsedPort = parseInt(PORT, 10);
// const numberOfCores = os.cpus().length;

// if (cluster.isMaster) {
//   console.log(`Master ${process.pid} started`);
//   for (let i = 0; i < numberOfCores; i++) {
//     cluster.fork();
//   }
// } else {
//   const server = new Server(parsedPort || 6048);
//   server.start();
//   console.log(`Worker ${process.pid} started`);
// }

const server = new Server(parsedPort || 6048);
server.start();
