export default function iterateThroughObject(reportWithIterator) {
  let string = "";
  for (let i = 0; i <= reportWithIterator.length - 1; i++) {
    string += reportWithIterator[i];
    if (i < reportWithIterator.length - 1) {
      string += " | ";
    }
  }
  return string;
}
