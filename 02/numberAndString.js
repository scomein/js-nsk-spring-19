/**
 * Создайте класс, обладающий следующим поведением:
 * const values = ['hello', 'javascript', 'world'];
 * const instances = values.map(str => new NumberAndString(str));
 *
 * const resultConcatenation = instances.join(' '); // == 'hello javascript world'
 * const resultCharCount = instances.reduce((obj, memo) => memo + obj, 0); // == 20
 *
 * @class NumberAndString
 * @param {String} str - initial value
 */
export class NumberAndString {
  constructor(str) {
    this.value = str;
    this.length = str.length;
  }

  valueOf() {
    return this.length;
  }

  toString() {
    return this.value;
  }
}
