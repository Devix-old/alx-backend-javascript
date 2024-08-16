/// <reference path="./Teacher.ts" />
namespace Subjects {
  export class Subject {
    constructor(public teacher: Teacher) {
      this.teacher = teacher
    }
    setTeacher(teacher: Teacher) {
      this.teacher = teacher; 
    }
  }
  export interface Teacher {
    age?: number;
  }
}
