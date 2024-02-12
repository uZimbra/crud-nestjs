import { plainToClass } from 'class-transformer';
import { IsNotEmpty } from 'class-validator';
import { Course } from 'src/domains/course';

export class CreateCourseDTO {
  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  category: string;

  public toDomain(): Course {
    return plainToClass(Course, this);
  }
}
