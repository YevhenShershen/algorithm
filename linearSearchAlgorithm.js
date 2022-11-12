//1)Алгоритм линейного поиска в массиве
const arr = [1, 4, 5, 8, 9, 1, 2, 7, 5, 2, 11];
let count = 0;
function lineArrSearch(array, item) {
  for (let i = 0; i < array.length; i++) {
    count += 1;
    if (arr[i] === item) {
      return i;
    }
  }
  return "We didn`t find an element in the array";
}
console.log(lineArrSearch(arr, 0));
console.log(`Count: ${count}`);
