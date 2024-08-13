export default function getStudentIdsSum(students) {
  const x = 0;
  return (
    students
      .map((student) => student.id)
      .reduce(
        (accumulator, currentValue) => accumulator + currentValue, x,
      )
  );
}
