import { Injectable, Logger, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import ApiResponse from '../shared/response/apiresponse';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  private logger = new Logger('HTTP');
  use(req: Request, res: Response, next: NextFunction) {
    const { method, originalUrl, body } = req;

    let reqBody = JSON.stringify(body);
    if (reqBody.length > 1000) reqBody = '{...}';

    const timestamp = new Date().toISOString();
    const now = Date.now();
    const { statusCode, statusMessage } = res;

    this.logger.log(
      'URL: ' +
        originalUrl +
        ', Method: ' +
        method +
        ', Status: ' +
        statusCode +
        ', Message: ' +
        statusMessage +
        ', RequestBody: ' +
        reqBody +
        ', Timestamp: ' +
        timestamp +
        ', ResponseTime: ' +
        `${Date.now() - now} ms`,
    );

    res.on('close', () => {});

    next();
  }

  getResponseLog(
    res: Response,
    method: string,
    originalUrl: string,
    timestamp: string,
    dateReq: number,
  ) {
    const rawResponse = res.write;
    const rawResponseEnd = res.end;

    let chunkBuffers = [];
    res.write = (...chunks) => {
      const resArgs = [];
      for (let i = 0; i < chunks.length; i++) {
        if (chunks[i]) resArgs[i] = Buffer.from(chunks[i]);
        if (!chunks[i]) {
          res.once('drain', res.write);
          --i;
        }
      }

      if (Buffer.concat(resArgs)?.length) {
        chunkBuffers = [...chunkBuffers, ...resArgs];
      }
      return rawResponse.apply(res, resArgs);
    };

    res.end = (...chunks) => {
      const resArgs = [];
      for (let i = 0; i < chunks.length; i++) {
        if (chunks[i]) resArgs[i] = Buffer.from(chunks[i]);
      }
      if (Buffer.concat(resArgs)?.length) {
        chunkBuffers = [...chunkBuffers, ...resArgs];
      }
      const body = Buffer.concat(chunkBuffers).toString('utf8');
      const responseLog = {
        response: {
          statusCode: res.statusCode,
          body: JSON.parse(body) || body || {},
          headers: res.getHeaders(),
        },
      };

      let apiResponse = new ApiResponse();
      apiResponse = Object.assign({}, JSON.parse(body));
      this.logger.log(
        'URL: ' +
          originalUrl +
          ', Method: ' +
          method +
          ', Status: ' +
          res.statusCode +
          ', Message: ' +
          apiResponse.message +
          ', ResponseBody: ' +
          apiResponse.data +
          ', Timestamp: ' +
          timestamp +
          ', ResponseTime: ' +
          `${Date.now() - dateReq} ms`,
      );

      rawResponseEnd.apply(res, resArgs);
      return responseLog as unknown as Response;
    };
  }
}
