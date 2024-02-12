import { Body, Controller, Get, Post, ValidationPipe } from '@nestjs/common';
import { Course } from 'src/domains/course';
import { CreateCourseDTO } from 'src/dtos/create-course.dto';
import { CoursesService } from 'src/services/courses/courses.service';

@Controller('/v1')
export class CoursesController {
  constructor(private readonly coursesService: CoursesService) {}

  @Get('/course')
  public getCourses(): Promise<Course[]> {
    return this.coursesService.get();
  }

  @Post('/course')
  public createCorse(
    @Body(new ValidationPipe({ transform: true }))
    createCourseDto: CreateCourseDTO,
  ): Promise<Course> {
    return this.coursesService.create(createCourseDto.toDomain());
  }
}
