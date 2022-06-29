function updateInventory(array1, array2) {
  let inventory = new Map(array1.map(arr => arr.reverse()));
  let delivery = new Map(array2.map(arr => arr.reverse()));

  delivery.forEach((value, key) => {
    inventory.has(key) ? inventory.set(key, value + inventory.get(key)) : inventory.set(key, value);
  });

  let sortedInventory = new Map([...inventory].sort());
  let inventoryArray = [...sortedInventory].map(arr => arr.reverse());

  return inventoryArray;
}

// Example inventory lists
var curInv = [
  [21, "Bowling Ball"],
  [2, "Dirty Sock"],
  [1, "Hair Pin"],
  [5, "Microphone"],
];

var newInv = [
  [2, "Hair Pin"],
  [3, "Half-Eaten Apple"],
  [67, "Bowling Ball"],
  [7, "Toothpaste"],
];

console.log(updateInventory(curInv, newInv));
