/// <reference path="./Subject.ts" />

namespace Subjects {
  export interface Teacher {
    experienceTeachingC: number
  }
  export class Cpp extends Subject {
    constructor(teacher: Teacher){
      super(teacher);
    }
    getRequirements() {
      return 'Here is the list of requirements for Cpp'
    }
    getAvailableTeacher(){
      return this.teacher.experienceTeachingC
        ? `Available Teacher: ${this.teacher.firstName}`
        : "No available teacher"

    }
  }
}


