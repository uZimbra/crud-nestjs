import { Test, TestingModule } from '@nestjs/testing';
import { CoursesController } from './courses.controller';
import { CoursesService } from 'src/services/courses/courses.service';

describe('AppController', () => {
  let coursesController: CoursesController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [CoursesController],
      providers: [CoursesService],
    }).compile();

    coursesController = app.get<CoursesController>(CoursesController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(coursesController.getHello()).toBe('Hello World!');
    });
  });
});
