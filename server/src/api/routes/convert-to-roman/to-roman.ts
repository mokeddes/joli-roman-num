import {
 Router, Request, Response, NextFunction 
} from 'express';

import { celebrate, Joi } from 'celebrate';
import arabicDecimalToRoman from '../../../services/toRoman';
import emitter from '../../shared/eventBus';

const route = Router();

export default (app: Router) => {
  app.use(route);

  route.post(
    '/to-roman',
    celebrate({
      body: Joi.object().keys({
        arabicNumber: Joi.number()
          .integer()
          .min(1)
          .max(3000)
          .required(),
      }),
    }),
    async (req, res, next) => {
      try {
        res.status(204).send();

        const { arabicNumber } = req.body;
        const romanSymbols = arabicDecimalToRoman(arabicNumber);
        // fire ecent to SSE controllers
        emitter.emit('sse-event', {
          fromArabicToRoman: true,
          romanSymbols,
          arabicNumber,
        });
      } catch (error) {
        // To-Do add logger
        console.error('🔥 error %o', error);
        next(error);
      }
    },
  );
};
