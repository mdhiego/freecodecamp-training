function sym(array1, array2, rest) {
    let result = [];
    const [set1, set2] = [new Set(array1), new Set(array2)];
  
    for (let item of set1) {
      if (!set2.has(item)) result.push(item);
      else set2.delete(item);
    }
  
    for (let item of set2) {
      if (!set1.has(item)) result.add(item);
      else set1.delete(item);
    }
  
    return (rest ? sym(result, rest) : result).sort();
  }
  
  console.log(sym([1, 2, 5], [2, 3, 5], [3, 4, 5]));
  