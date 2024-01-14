import { Controller, Get } from '@nestjs/common';
import { Course } from 'src/models/course';
import { CoursesService } from 'src/services/courses/courses.service';

@Controller('/v1')
export class CoursesController {
  constructor(private readonly coursesService: CoursesService) {}

  @Get('/courses')
  getHello(): Course[] {
    return this.coursesService.get();
  }
}
