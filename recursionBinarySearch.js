
//Рекурсивная бинарная сортировка
let arr1 = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
function BinarySearch(arr, start, end, key) {
    if(start > end) return -1;
    let mid = Math.floor((start + end) / 2);

    if(arr[mid] === key) return mid;
    if(key > arr[mid]) {
        return BinarySearch(arr, mid + 1, end, key);
    } else if(key < arr[mid]) {
        return BinarySearch(arr, start, mid -1, key);
    }
}
console.log(BinarySearch(arr1, 0, arr1.length - 1, 2))