/**
 * Напишите функцию anagram(first, second), определяющую,
 * являются ли переданные строки first и second анаграммами.
 *
 * Пример:
 * anagram('просветитель', 'терпеливость') === true
 *
 * Больше примеров в тестах.
 *
 * @param  {string} first первая строка
 * @param  {string} second вторая строка
 * @return {boolean}
 */
export function anagram(first, second) {
  const secondCopy = second.toLocaleLowerCase().split('');

  const firstCopy = first.toLocaleLowerCase().split('');

  firstCopy.forEach(t => {
    const index = secondCopy.indexOf(t);
    const letter = secondCopy[index];

    if (letter !== undefined && t.charCodeAt() === letter.charCodeAt()) {
      secondCopy.splice(index, 1);
    }
    firstCopy.splice(1, 1);
  });

  return secondCopy.length === firstCopy.length;
}
