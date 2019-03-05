/**
 * Напишите функцию getIntersection(first, second), возвращающую
 * массив из общих значений массивов first и second.
 *
 * Результирующий массив должен быть отсортирован по возрастанию.
 *
 * Пример:
 * getIntersection([1, 3, 5, 7, 9], [1, 2, 3, 4]); //  [1, 3]
 * getIntersection([1, 1, 2], [2, 1, 1, 1]); // [1, 1, 2]
 *
 * @param  {number[]} first исходные массивы
 * @param  {number[]} second исходные массивы
 * @return {number[]} массив значений, отсортированный по возрастанию
 */
export function getIntersection(first, second) {
  const comparator = (a, b) => a - b;
  const countInArray = (arr, t) => arr.lastIndexOf(t) - arr.indexOf(t) + 1;
  const secondSorted = second.sort(comparator);

  const firstFiltered = first.filter(t => second.indexOf(t) >= 0).sort(comparator);

  firstFiltered.forEach(t => {
    const diff = countInArray(firstFiltered, t) - countInArray(secondSorted, t);

    if (diff > 0) {
      firstFiltered.splice(firstFiltered.indexOf(t), diff);
    }
  });

  return firstFiltered;
}
