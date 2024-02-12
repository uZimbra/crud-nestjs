import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CourseEntity } from 'src/entities/course.entity';
import { CoursesService } from './courses/courses.service';

@Module({
  imports: [TypeOrmModule.forFeature([CourseEntity])],
  providers: [CoursesService],
  exports: [CoursesService],
})
export class ServicesModule {}
