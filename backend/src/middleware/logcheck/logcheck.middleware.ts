import { Injectable, NestMiddleware } from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';

@Injectable()
export class LogcheckMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    if (req.session.user) {
      req.body.user = true;
      console.log('m', true);
    } else {
      req.body.user = false;
      console.log('m', false);
    }

    next();
  }
}
