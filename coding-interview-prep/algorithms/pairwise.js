function pairwise(arr, arg) {
  let pairedIndexes = new Map();

  arr.flatMap((v, i) =>
    arr.slice(i + 1).forEach((w, j) => {
      if (!pairedIndexes.has(i) && !pairedIndexes.has(i + j + 1) && v + w === arg) 
      {
        pairedIndexes.set(i, v);
        pairedIndexes.set(i + j + 1, w);
      }
    })
  );

  return [...pairedIndexes.keys()].reduce((acc, curr) => acc + curr, 0);
}

console.log(pairwise([0, 0, 0, 0, 1, 1], 1));
