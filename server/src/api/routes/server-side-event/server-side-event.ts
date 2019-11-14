// route.get('/event-stream', (req: Request, res: Response) => {
//     let events = new EventEmitter();
//     route.set('event', events);
//     // SSE Setup
//     res.writeHead(200, {
//       'Content-Type': 'text/event-stream',
//       'Cache-Control': 'no-cache',
//       Connection: 'keep-alive',
//     });
//     res.write('\n');
//     console.log('yes');

//     sseDemo(req, res);
//   });

import { Router, Request, Response } from "express";
import { EventEmitter } from "events";
import { celebrate, Joi } from "celebrate";
import emitter from "../../shared/eventBus";

const route = Router();

export default (app: Router) => {
  app.use(route);

  route.get("/event-stream", (req: Request, res: Response) => {
    // SSE Setup
    res.writeHead(200, {
      "Content-Type": "text/event-stream",
      "Cache-Control": "no-cache",
      Connection: "keep-alive"
    });
    res.write("\n");
    const messageId = 0;

    const onEvent = (data: eventDataFired) => {
      console.log("event received from sse");
      res.write("retry: 500\n");
      res.write(`id: ${messageId}\n`);
      // res.write('event: event\n');

      if (data.fromArabicToRoman) {
        res.write("event: update-resultRoman\n");
      } else {
        res.write("event: update-resultArabic\n");
      }

      res.write(`data: ${JSON.stringify(data)}\n\n`);
    };
    emitter.on("sse-event", onEvent);
  });
};

type eventDataFired = {
  fromArabicToRoman?: boolean;
  romanSymbols: string;
  arabicNumber: number;
  fromRomanToArabic?: boolean;
};
