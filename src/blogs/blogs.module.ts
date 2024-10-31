import { Module } from '@nestjs/common';
import { BlogsController } from './blogs.controller';
import {ConfigModule} from '../config/config.module'
import { BlogsService } from './blogs.service';
import { AppController } from 'src/app.controller';

@Module({
    imports:[ConfigModule],
  controllers: [BlogsController,AppController],
  providers: []
})
export class BlogsModule {}
