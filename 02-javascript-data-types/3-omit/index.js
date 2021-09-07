/**
 * omit - creates an object composed of enumerable property fields
 * @param {object} obj - the source object
 * @param {...string} fields - the properties paths to omit
 * @returns {object} - returns the new object
 */
export const omit = (obj, ...fields) => {
  const arr = [];
  Object.entries(obj).find((item) => {
    const [key] = item;
    if ( !fields.includes(key) ) {
      arr.push(item);
    }
  });
  return Object.fromEntries(arr);
};
