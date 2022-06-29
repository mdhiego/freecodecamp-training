function sym(...args) {
  const [array1, array2, ...rest] = args;
  let result = [];
  const [set1, set2] = [new Set(array1), new Set(array2)];

  set1.forEach((item) => {
    if (!set2.has(item)) result.push(item);
  });
  set2.forEach((item) => {
    if (!set1.has(item)) result.push(item);
  });

  return (rest.length === 0 ? result : sym(result, ...rest)).sort();
}

console.log(sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3]));
