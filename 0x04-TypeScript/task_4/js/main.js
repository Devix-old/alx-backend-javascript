"use strict";
/// <reference path="./subjects/Teacher.ts" />
/// <reference path="./subjects/Subject.ts" />
/// <reference path="./subjects/Cpp.ts" />
/// <reference path="./subjects/React.ts" />
/// <reference path="./subjects/Java.ts" />
exports.__esModule = true;
exports.react = exports.java = exports.cpp = exports.teacher = void 0;
exports.teacher = {
    firstName: "ayman",
    lastName: "El gharef",
    experienceTeachingC: 10
};
exports.cpp = new Subjects.Cpp(exports.teacher);
exports.java = new Subjects.Java(exports.teacher);
exports.react = new Subjects.React(exports.teacher);
exports.cpp.getAvailableTeacher();
exports.java.getAvailableTeacher();
