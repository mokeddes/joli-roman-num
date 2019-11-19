import { Router } from 'express';
import convertToArabic from './convert-to-arabic/to-arabic';
import convertToRoman from './convert-to-roman/to-roman';
import eventStream from './server-side-event/server-side-event';
// guaranteed to get dependencies
export default () => {
  const app = Router();
  convertToArabic(app);
  convertToRoman(app);
  eventStream(app);
  return app;
};
