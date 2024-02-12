import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Course } from 'src/domains/course';
import { CourseEntity } from 'src/entities/course.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CoursesService {
  constructor(
    @InjectRepository(CourseEntity)
    private courseRepository: Repository<CourseEntity>,
  ) {}

  public async get(): Promise<Course[]> {
    return this.courseRepository
      .find()
      .then((res) => res.map((course) => course.toDomain()));
  }

  public async create({ name, category }: Course): Promise<Course> {
    const course = this.courseRepository.create({
      name,
      category,
    });

    return this.courseRepository.save(course).then((res) => res.toDomain());
  }
}
