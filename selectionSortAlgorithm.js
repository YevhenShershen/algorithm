//Сортировка выбором (Selection sort)
const arr = [
  1, 21, 3, 5, 6, 2, 21, 313, 55, -2, -54, 231, 12, 222, 11, 0, -11, -21,-2, -54, 231, 12, 222, 11, 0, -11, -21,
];
let count = 0;
function selectionSort(array) {
  for (let i = 0; i < array.length; i++) {
    let indexMin = i;
    for (let j = i + 1; j < array.length; j++) {
      if (array[j] < array[indexMin]) {
        indexMin = j;
      }
      count += 1;
    }
    let tmp = array[i];
    array[i] = array[indexMin];
    array[indexMin] = tmp;
  }
  return array;
}
console.log(selectionSort(arr));
console.log(`Count: ${count}`);
console.log(`array lenght: ${arr.length}`); //O(n*n)

