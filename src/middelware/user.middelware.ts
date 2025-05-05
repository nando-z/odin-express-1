import { Router, type Request,  type Response, type NextFunction } from 'express';

const middelware = Router();

declare global {
  namespace Express {
    interface Response {
      requestTime?: string;
    }
  }
}

middelware.use((_req: Request, res: Response, next: NextFunction) => {
  res.requestTime = new Date().toISOString();
    console.log(`Request Time: ${res.requestTime}`);
  next();
});

export default middelware;