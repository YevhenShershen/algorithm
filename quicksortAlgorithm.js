//Быстрая сортировка, сортировка Хоара (англ. quicksort)
const arr = [
  1, 21, 3, 5, 6, 2, 21, 313, 55, -2, -54, 231, 12, 222, 11, 0, -11, -21, -2,
  -54, 231, 12, 222, 11, 0, -11, -21, 1111,
];
let count = 0;
function quickSort(array) {
  if (array.length <= 1) {
    return array;
  }
  //опорный элемент (центральный)
  let pivotIndex = Math.floor(array.length / 2);
  //получаем сам опорный элемент по индексу
  let pivot = array[pivotIndex];
  //два массива  less = [] и greater = []. В один сохраняем числа меньше чем опорный а во второй большие
  let less = [];
  let greater = [];
  // пробегаемся по всему массиву и сравниваем все жлементы с опорным
  for (let i = 0; i < array.length; i++) {
    count += 1;
    if (i === pivotIndex) continue;
    if (array[i] < pivot) {
      less.push(array[i]);
    } else {
      greater.push(array[i]);
    }
  }
  return [...quickSort(less), pivot, ...quickSort(greater)];
}
console.log(quickSort(arr));
console.log(`Count: ${count}`);
