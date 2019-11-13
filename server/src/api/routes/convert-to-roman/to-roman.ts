import {
 Router, Request, Response, NextFunction 
} from 'express';

import { celebrate, Joi } from 'celebrate';
import arabicDecimalToRoman from '../../../services/toRoman';

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
        const { arabicNumber } = req.body;
        const romanSymbols = arabicDecimalToRoman(arabicNumber);
        res.status(201).send({ romanSymbols, arabicNumber });
      } catch (error) {
        // To-Do add logger
        console.error('🔥 error %o', error);
        next(error);
      }
    },
  );
};
