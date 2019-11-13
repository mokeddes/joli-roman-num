import { Router } from 'express';
import convertToArabic from './routes/convert-to-arabic/to-arabic';
import convertToRoman from './routes/convert-to-roman/to-roman';

// guaranteed to get dependencies
export default () => {
  const app = Router();
  convertToArabic(app);
  convertToRoman(app);

  return app;
};
