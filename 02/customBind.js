/**
 * Напишите функцию customBind(func, context, ...args),
 * дублирующую функциональность Function.prototype.bind
 *
 * Пример:
 * const func = function (argA, argB) { return [this, argA, argB] };
 * const binded = customBind(func, { a: 'a' }, 'b');
 *
 * binded('c'); // [{ a: 'a' }, 'b', 'c']
 *
 * @param  {Function} func передаваемая функция
 * @param  {*}        context контекст
 * @param  {*[]}      args массив аргументов
 * @return {Function} функция с нужным контекстом
 */
export function customBind(func, context, ...args) {
  const targetFunc = func;
  const boundContext = context;
  const boundArgs = args;

  return function(...args) {
    args.forEach(t => boundArgs.push(t));
    return targetFunc.apply(boundContext, boundArgs, args);
  };
}
