/**
 * получить элементы со страницы
 * элемент куда будем записывать текст
 * поле ввода
 */
const textElem = document.getElementById('text_container');

const inputElem = document.getElementById('checked_text');

/**
 * состояние нашего приложения
 * добавить в объект текущий текст, который мы будем показывать
 */
const state = {
  text: 'какой-то текст'
};

/**
 * отобразить текст на странице
 */

/**
 * добавить обработчик нажания на клавиши и сравнивать введенный текст пользователем с сохраненным ранее
 * если они отличаются, то изменить цвет текста на красный
 */

const updateText = () => {
  const getText = new XMLHttpRequest();

  getText.onload = function() {
    console.log(getText);
    state.text = getText.responseText.substr(2, getText.responseText.length - 4);
    textElem.textContent = state.text;
  };
  getText.open('GET', 'https://fish-text.ru/get', true);
  getText.send();
  return getText;
};

updateText();
// eslint-disable-next-line func-style
const checkText = function() {
  this.style.color = state.text.startsWith(this.value) ? 'black' : 'red';
};

document.addEventListener('onload', updateText);
inputElem.addEventListener('input', checkText);
