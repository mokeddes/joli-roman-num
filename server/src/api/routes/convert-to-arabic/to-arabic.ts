import {
 Router, Request, Response, NextFunction 
} from 'express';

import { celebrate, Joi } from 'celebrate';
import romanToDecimalArabic from '../../../services/toArabic';

const route = Router();

export default (app: Router) => {
  app.use(route);

  route.post(
    '/to-arabic',
    celebrate({
      body: Joi.object().keys({
        romanSymbols: Joi.string()
          .min(1)
          .required()
          .regex(/^(?=[MDCLXVI])M*(C[MD]|D?C*)(X[CL]|L?X*)(I[XV]|V?I*)$/),
      }),
    }),
    async (req: Request, res: Response, next: NextFunction) => {
      try {
        const { romanSymbols } = req.body;
        const arabicNumber = romanToDecimalArabic(romanSymbols);
        res.status(201).send({ romanSymbols, arabicNumber });
      } catch (error) {
        console.error('🔥 error %o', error);
        next(error);
      }
    },
  );
};
