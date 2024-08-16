export interface DirectorInterface {
  workFromHome(): string
  getCoffeeBreak(): string
  workDirectorTasks(): string
}

export interface TeacherInterface {
  workFromHome(): string;
  getCoffeeBreak(): string
  workTeacherTasks(): string
}

export class Director implements DirectorInterface{
  constructor() {}
  workFromHome() {
    return "Working from home"
  }
  getCoffeeBreak() {
    return "Getting a coffee break"
  }
  workDirectorTasks(){
    return "Getting to director tasks"
  }
}

export class Teacher implements TeacherInterface {
  constructor() {}
  workFromHome() {
    return "Cannot work from home"
  }
  getCoffeeBreak() {
    return "Cannot have a break"
  }
  workTeacherTasks() {
    return "Getting to work"
  }
}

export function createEmployee (salary: string | number) :Teacher | Director{
  if(Number(salary) < 500){
    return new Teacher()
  }
  else {
    return new Director()
  }
}

export function isDirector(employee: Teacher | Director): boolean {
  return employee instanceof Director;
}

export const executeWork = (employee : Teacher | Director): void  => {
  console.log(employee instanceof Director ? employee.workDirectorTasks() : employee.workTeacherTasks())

}

export type Subjects = "Math" | "History";
export function teachClass(todayClass: Subjects): string {
  if (todayClass === 'Math') return 'Teaching Math'
  else if(todayClass === 'History') return 'Teaching History'
}


