/// <reference path="./subjects/Teacher.ts" />
/// <reference path="./subjects/Subject.ts" />
/// <reference path="./subjects/Cpp.ts" />
/// <reference path="./subjects/React.ts" />
/// <reference path="./subjects/Java.ts" />

export const teacher: Subjects.Teacher = {
  firstName: "ayman",
  lastName: "El gharef",
  experienceTeachingC: 10,
}

export const cpp = new Subjects.Cpp(teacher)
export const java = new Subjects.Java(teacher)
export const react = new Subjects.React(teacher)


cpp.getAvailableTeacher();
java.getAvailableTeacher();
