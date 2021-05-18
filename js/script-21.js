// Задание
// Напиши функцию findLongestWord(string) которая принимает произвольную строку состоящую только
// из слов разделённых пробелом(параметр string) и возвращает самое длинное слово в этой строке.

// Тесты
// Объявлена функция findLongestWord(string)
// Вызов функции findLongestWord("The quick brown fox jumped over the lazy dog") возвращает jumped
// Вызов функции findLongestWord("Google do a roll") возвращает Google
// Вызов функции findLongestWord("May the force be with you") возвращает force
// Вызов функции findLongestWord() со случайной строкой возвращает правильное значение

function findLongestWord(string) {
  // Change code below this line
  const array = string.split(' ');
  let longWord = array[0];

  for (let i = 0; i < array.length; i += 1) {
    if (longWord.length < array[i].length) {
      longWord = array[i];
    }
  }
  return longWord;
  // Change code above this line
}
console.log(findLongestWord('The quick brown fox jumped over the lazy dog'));
