import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CreateStudentInput } from './create-student.input';
import { StudentService } from './student.service';
import { StudentType } from './student.type';

@Resolver(() => StudentType)
export class StudentResolver {
  constructor(private studentService: StudentService) {}

  // Queries
  @Query(() => [StudentType])
  getAllStudents() {
    return this.studentService.getAllStudents();
  }

  @Query(() => StudentType)
  getStudentById(@Args('id') id: string) {
    return this.studentService.getStudentById(id);
  }

  // Mutations
  @Mutation(() => StudentType)
  createStudent(
    @Args('createStudentInput') createStudentInput: CreateStudentInput,
  ) {
    return this.studentService.createStudent(createStudentInput);
  }
}
