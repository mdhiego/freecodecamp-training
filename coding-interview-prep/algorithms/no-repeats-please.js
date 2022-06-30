function getPermutations(str) {
  let permutations = [];

  for (let char of str) {
    if (permutations.length === 0) {
      permutations.push(char);
      continue;
    }

    let newPermutations = [];
    for (let permutation of permutations) {
      for (let i = 0; i <= permutation.length; i++) {
        newPermutations.push(permutation.slice(0, i) + char + permutation.slice(i));
      }
    }
    permutations = newPermutations;
  }

  return permutations;
}

function permAlone(str) {
  const permutations = getPermutations(str);

  return permutations.reduce((acc, curr) => {
    return !curr.match(/([a-z])\1/ig) ? acc + 1 : acc;
  }, 0);
}

console.log(permAlone('aabb'));
