export default function hasValuesFromArray(set, array) {
  let result = true;
  array.map((value) => {
    if (!set.has(value)) result = false;
  });
  return result;
}
