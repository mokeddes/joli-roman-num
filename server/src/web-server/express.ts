import * as bodyParser from 'body-parser';
import cors from 'cors';
import path from 'path';
import express, {
 Express, Request, Response, NextFunction 
} from 'express';

import { errors } from 'celebrate';
import routes from '../api/index';

interface MyCustomError extends Error {
  status?: number;
}

export default ({ app }: { app: Express }) => {
  /**
   * Health Check endpoints
   * @TODO Explain why they are here
   */
  app.use((req, res, next) => {
    console.log('new incomming request', req.url);
    next();
  });

  // load static files frontEnd
  app.use(
    '/front',
    express.static(path.join(__dirname, '..', '..', '..', '/public')),
  );

  app.get('/status', (req, res) => {
    res.status(200).end();
  });
  app.head('/status', (req, res) => {
    res.status(200).end();
  });

  // Useful if you're behind a reverse proxy (Heroku, Bluemix, AWS ELB, Nginx, etc)
  // It shows the real origin IP in the heroku or Cloudwatch logs
  app.enable('trust proxy');

  // The magic package that prevents frontend developers going nuts
  // Alternate description:
  // Enable Cross Origin Resource Sharing to all origins by default
  app.use(cors());

  // Some sauce that always add since 2014
  // "Lets you use HTTP verbs such as PUT or DELETE in places where the client doesn't support it."
  // Maybe not needed anymore ?

  // Middleware that transforms the raw string of req.body into json
  app.use(bodyParser.json());

  //   // Load API routes
  //   app.use(config.api.prefix, routes);

  // Load API routes
  app.use(routes());

  //  Invoque Joi validation errors
  // TODO: custom message error
  app.use(errors());

  // / catch 404 and forward to error handler
  app.use((req: Request, res: Response, next: NextFunction) => {
    const err: MyCustomError = {
      name: 'Not Found',
      message: 'Not Found',
      status: 404,
    };
    next(err);
  });
  // / error handlers
  app.use(
    (err: MyCustomError, req: Request, res: Response, next: NextFunction) => {
      res.status(err.status || 500);
      res.json({
        errors: {
          message: err.message,
        },
      });
    },
  );
};
