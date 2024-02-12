import { plainToClass } from 'class-transformer';
import { Course } from 'src/domains/course';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class CourseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false, length: 200 })
  name: string;

  @Column({ nullable: false, length: 20 })
  category: string;

  public toDomain(): Course {
    return plainToClass(Course, this);
  }
}
