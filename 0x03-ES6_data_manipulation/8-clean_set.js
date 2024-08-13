export default function cleanSet(set, startString) {
  const result = [];
  if (!startString || typeof startString != 'string' ) {
    return '';
  }
  set.forEach((element) => {
    if (element.startsWith(startString) && typeof element === 'string') {
      result.push(element.substring(startString.length));
    }
  });

  return result.join('-');
}
