export default function createReportObject(employeesList) {
  return {
    allEmployees: {
      ...employeesList,
    },
    getNumberOfDepartments(x) {
      return Object.keys(x).length;
    },
  };
}
