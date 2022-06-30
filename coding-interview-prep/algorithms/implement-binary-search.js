function binarySearch(searchList, value) {
    let arrayPath = [];

    do {
        let mid = Math.floor((searchList.length - 1) / 2);
        arrayPath.push(searchList[mid]);

        if (searchList[mid] === value) {
            return arrayPath;
        } else if (searchList[mid] > value) {
            searchList = searchList.slice(0, mid);
        } else {
            searchList = searchList.slice(mid + 1);
        }
    } while (searchList.length >= 1);

    return 'Value Not Found';
}

const testArray = [
    0, 1, 2, 3, 4, 5, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
    23, 49, 70
];

console.log(binarySearch(testArray, 70));
