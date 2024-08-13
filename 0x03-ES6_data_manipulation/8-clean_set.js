export default function cleanSet(set, startString) {
  const result = [];
  if (!startString) {
    return '';
  }
  set.forEach((element) => {
    if (element.startsWith(startString)) {
      result.push(element.substring(3));
    }
  });

  return result.join('-');
}
