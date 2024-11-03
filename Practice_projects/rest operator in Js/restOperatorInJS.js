const packGroceries = (...items) => {
  return items;
}

const packedGroceries = packGroceries("apples", "bananas", "milk");
const morePackedGroceries = packGroceries("eggs", "bread");

console.log(packedGroceries);
console.log(morePackedGroceries);
/*
Output:
[ 'apples', 'bananas', 'milk' ]
[ 'eggs', 'bread' ]
*/
