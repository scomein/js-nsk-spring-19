/**
 * Напишите функцию getMinMax(input), принимающую строку input,
 * и ищущую в ней максимальное и минимальное числа.
 *
 * Числа в строке выделяются пробелами или знаками препинания.
 *
 * Пример:
 * getMinMax('1 и 6.45, -2, но 8, а затем 15, то есть 2.7 и -1028');
 * // { min: -1028, max: 15 }
 *
 * getMinMax('"To Infinity and beyond", - repeated Buzz Lightyear 4 times in a row')
 * { max: Infinity, min: 4 }
 *
 * Больше примеров в тестах.
 *
 * @param  {string} input входная строка
 * @return {{min: number, max: number}} объект с минимумом и максимумом
 */
export function getMinMax(input) {
  const numbers = input.split(/[ :;?!~,`"&|()<>{}\[\]\r\n/\\]+/)
    .filter(str => str.length > 0)
    // eslint-disable-next-line no-restricted-globals
    .map(str => (isNaN(str) ? parseFloat(str).toString() : str))
    // eslint-disable-next-line no-restricted-globals
    .filter(str => !isNaN(str))
    .map(str => Number(str))
    .sort((a, b) => a - b);

  return {
    min: numbers.length > 0 ? numbers[0] : undefined,
    max: numbers.length > 0 ? numbers[numbers.length - 1] : undefined
  };
}
console.log(getMinMax('"To Infinity and beyond", - repeated Buzz Lightyear 4 times in a row'));
