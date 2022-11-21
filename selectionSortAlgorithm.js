//Сортировка выбором (Selection sort)
const arr = [
  1, 21, 3, 5, 6, 2, 21, 313, 55, -2, -54, 231, 12, 222, 11, 0, -11, -21, -2,
  -54, 231, 12, 222, 11, 0, -11, -21, 1111,
];
let count = 0;
function selectionSort(array) {
  for (let i = 0; i < array.length; i++) {
    let indexMin = i;
    //за полный проход по массиву мы должны найти минимальное число
    for (let j = i + 1; j < array.length; j++) {
      if (array[j] < array[indexMin]) {
        //запоминаем индекс минимального числа
        indexMin = j;
      }
      count += 1;
    }
    //1)присваиваем переменной эл в массиве по индексом i
    //2) заменяем эл в массиве под индексом i на эл под индексом indexMin
    //3)заменяем эл в массиве под индексом indexMin на эл в пеоеменной tmp
    let tmp = array[i];
    array[i] = array[indexMin];
    array[indexMin] = tmp;
  }
  return array;
}
console.log(selectionSort(arr));
console.log(`Сортировка выбором: ${count}`);
console.log(`array lenght: ${arr.length}`); //O(n*n)
