/**
 * Напишите функцию sum(x), вычисляющую суммы подобным образом:
 * sum() === 0
 * sum(1)(2)() === 3
 * sum(1)(2)(3)() === 6
 *
 * Возможно чуть более понятная нотация для любителей функциональщины:
 * sum :: Number -> sum
 * sum :: void -> Number
 *
 * @param {*} x число или undefined
 * @returns а это уже сами решите
 */
export function sum(x) {
  const acc = [];

  // eslint-disable-next-line func-style
  const f = function(t) {
    if (t === undefined) {
      return acc.reduce((a, element) => a + element, 0);
    }
    acc.push(t);
    return f;
  };

  return f(x);
}
