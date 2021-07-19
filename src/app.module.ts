import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { LocationSchema } from './schemas/location.schema';
import config from './config/keys';

@Module({
  imports: [
    MongooseModule.forRoot(config.mongoURI),
    MongooseModule.forFeature([{ name: 'Location', schema: LocationSchema }]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
