/**
 * sortStrings - sorts array of string by two criteria "asc" or "desc"
 * @param {string[]} arr - the array of strings
 * @param {string} [param="asc"] param - the sorting type "asc" or "desc"
 * @returns {string[]}
 */
export function sortStrings(arr, param = 'asc') {
  const arrSort = [...arr];
  const caseFirst = param === 'asc' ? 'upper' : 'lower';

  function compare(a, b) {
    if(param === 'asc') {
      return a.localeCompare(b, 'ru-en', {caseFirst: caseFirst});
    } else {
      return b.localeCompare(a, 'ru-en', {caseFirst: caseFirst});
    }
  }

  arrSort.sort(compare);
  return arrSort;
}
