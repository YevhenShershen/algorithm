const array = [2, 1, 44, -3];
function sortFunc(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[j + 1] < arr[j]) {
        console.log(`${arr[j]} : ${arr[j + 1]}`);
        let t = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = t;
      }
      console.log(arr)
    }
  }
  return arr;
}
console.log(`test ${sortFunc(array)}`);
