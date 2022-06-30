function partition(arr, left, right) {
    let pivot = arr[right];
    let i = left - 1;
    for (let j = left; j < right; j++) {
        if (arr[j] < pivot) {
            i++;
            let temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
        }
    }
    let temp = arr[i + 1];
    arr[i + 1] = arr[right];
    arr[right] = temp;
    return i + 1;
}

function quickSortAux(arr, left, right) {
    if (left < right) {
        let pivot = partition(arr, left, right);
        quickSortAux(arr, left, pivot - 1);
        quickSortAux(arr, pivot + 1, right);
    }
}

function quickSort(array) {
    quickSortAux(array, 0, array.length - 1);

    return array;
}

console.log(quickSort([3, 2, 1]));
