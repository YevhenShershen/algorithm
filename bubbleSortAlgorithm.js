//Сортировка пузырьком (Bubble sort)
const arr = [
  1, 21, 3, 5, 6, 2, 21, 313, 55, -2, -54, 231, 12, 222, 11, 0, -11, -21, -2,
  -54, 231, 12, 222, 11, 0, -11, -21, 1111,
];
let count = 0;
function bubbleSort(array) {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      if (array[j + 1] < array[j]) {
        let tmp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = tmp;
      }
      count += 1;
    }
  }
  return array;
}
console.log(bubbleSort(arr));
console.log(`Сортировка пузырьком: ${count}`); //O(n*n)
