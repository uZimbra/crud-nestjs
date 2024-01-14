import { Injectable } from '@nestjs/common';
import { Course } from 'src/models/course';

@Injectable()
export class CoursesService {
  get(): Course[] {
    return [
      { _id: '1', name: 'Curso Angular', category: 'front-end' },
      { _id: '2', name: 'Curso de Springboot', category: 'back-end' },
    ];
  }
}
