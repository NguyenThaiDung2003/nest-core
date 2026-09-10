import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { createObserveModule } from '@nestjs/observe';
import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';
import { IpBlockMiddleware } from './ip-block/ip-block.middleware.js';

export const { ObserveModule, ObserveInstrument } = createObserveModule();

@Module({
  imports: [
    // Distributed tracing, auto-correlated logs, request/job metrics, error
    // telemetry, alarms, and more — out of the box. Sign up at https://observe.nestjs.com

  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule  implements NestModule{
  configure(consumer:MiddlewareConsumer){
    consumer.apply(IpBlockMiddleware).forRoutes('*');
  }
}
