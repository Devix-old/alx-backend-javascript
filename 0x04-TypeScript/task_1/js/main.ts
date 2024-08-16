// Exporting individual components
export interface Teacher {
  firstName: string
  fullTimeEmployee: boolean
  yearsOfExperience?: number
  lastName: string
  location: string
  [key: string]: any
}

export interface Directors extends Teacher {
  numberOfReports: number
}

export interface printTeacherFunction {
  (firstName: string, lastName: string): string
}

export const printTeacher: printTeacherFunction = (
  firstName: string,
  lastName: string
) => {
  return `${firstName[0]}. ${lastName}`
}

export interface studentClass {
  workOnHomework(): string
  displayName(): string
}

export interface studentConstructor {
  (firstName: string, lastName: string): StudentClass
}

export class StudentClass implements studentClass {
  constructor(public firstName: string, public lastName: string) {}

  workOnHomework(): string {
    return "Currently working"
  }

  displayName(): string {
    return this.firstName
  }
}
