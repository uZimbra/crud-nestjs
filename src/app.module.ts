import { Module } from '@nestjs/common';
import { CoursesService } from './services/courses/courses.service';
import { CoursesController } from './controllers/courses/courses.controller';

@Module({
  imports: [],
  controllers: [CoursesController],
  providers: [CoursesService, CoursesService],
})
export class AppModule {}
