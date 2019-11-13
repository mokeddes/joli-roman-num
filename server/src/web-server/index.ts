import express from 'express';
import path from 'path';
import expressLoader from './express';

// initializes the web server with framework, Express.
export default class Server {
  readonly port: number;

  constructor(port: number) {
    this.port = port;
  }

  start() {
    const app = express();

    expressLoader({ app });
    app.listen(this.port, (err: Error) => {
      if (err) {
        process.exit(1);
        return;
      }
      console.info(`
          ################################################
          🛡️  Server listening on port: ${this.port} 🛡️ 
          ################################################
        `);
    });
  }
}
