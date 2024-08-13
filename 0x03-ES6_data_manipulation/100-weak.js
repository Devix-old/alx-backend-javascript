export const weakMap = new WeakMap();
let i = 0;
export function queryAPI(endpoint) {
  i += 1;
  weakMap.set(endpoint, i);
  if (i >= 5) {
    throw new Error('Endpoint load is high');
  }
}
