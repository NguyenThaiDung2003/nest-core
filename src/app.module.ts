import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { createObserveModule } from '@nestjs/observe';
import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';
import { IpBlockMiddleware } from './ip-block/ip-block.middleware.js';
import { UserModule } from './user/user.module.js';

export const { ObserveModule, ObserveInstrument } = createObserveModule();

@Module({
  imports: [UserModule],
  controllers: [AppController,],
  providers: [AppService],
})
export class AppModule  implements NestModule{
  configure(consumer:MiddlewareConsumer){
    consumer.apply(IpBlockMiddleware).forRoutes('*');
  }
}
