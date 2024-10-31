import { Module } from '@nestjs/common';
import { BlogsController } from './blogs/blogs.controller'
import { BlogsModule } from './blogs/blogs.module';
import { ConfigModule } from './config/config.module';
import { BlogsService } from './blogs/blogs.service';

@Module({
  imports: [ConfigModule],
  controllers: [BlogsController],
  providers: [BlogsService],
})
export class AppModule {}
