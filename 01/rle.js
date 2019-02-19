/**
 * Напишите функцию rle(input), реализующую примитивное RLE-сжатие входящей строки input.
 * Подробнее об RLE: https://ru.wikipedia.org/wiki/Кодирование_длин_серий
 *
 * Входящая строка сооттветствует regex паттерну /^[A-Z]+$/
 *
 * Пример:
 * rle('AAAB') === 'A3B'
 * rle('BCCDDDEEEE') === 'BC2D3E4'
 *
 * Больше примеров в тестах.
 *
 * @param  {string} input
 * @return {string}
 */
export function rle(input) {
  let result = '';

  let i = 0;

  while (i < input.length) {
    const c = input[i];

    let count = 1;

    while (++i < input.length && input[i] === c) {
      count++;
    }
    result += c;
    if (count > 1) {
      result += count;
    }
  }
  return result;
}
