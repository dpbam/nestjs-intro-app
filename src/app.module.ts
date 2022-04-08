import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsModule } from './products/products.module';

@Module({
  imports: [
    ProductsModule,
    MongooseModule.forRoot(
      'mongodb://localhost:27017/nestjs-demo'
      // `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PWD}@cluster0.kbze5.mongodb.net/nestjsdemo?retryWrites=true&w=majority`
    ),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
