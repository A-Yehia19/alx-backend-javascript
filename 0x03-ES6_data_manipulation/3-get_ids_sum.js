export default function getStudentIdsSum(students) {
  if (students instanceof Array) {
    return students.reduce(
      (accumulator, curStudent) => accumulator + curStudent.id,
      0,
    );
  }

  return 0;
}
