import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class IpBlockMiddleware implements NestMiddleware {
  private readonly blacklist: string[] = ['::1', '127.0.0.1'];

  use(req: Request, res: Response, next: NextFunction) {
    const clientIp = req.ip as string;
    if (this.blacklist.includes(clientIp)) {
      return res.status(403).send({
        statusCode: 403,
        message: 'Access denied: Your IP address is blocked.',
      });
    }

    next();
  }
}