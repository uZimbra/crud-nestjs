import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CoursesController } from './controllers/courses/courses.controller';
import { CourseEntity } from './entities/course.entity';
import { ServicesModule } from './services/services.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'database.sqlite3',
      entities: [CourseEntity],
      synchronize: true,
    }),
    ServicesModule,
  ],
  controllers: [CoursesController],
})
export class AppModule {}
