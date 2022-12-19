/*
const packingList = ["bowls", "plates", "pots", "pans", "eating utensils", "glasses", "cups", "cooking utensils"];

console.log("Kitchen stuff to pack:");
for (let i = 0; i < packingList.length; i++) {
  console.log(packingList[i]);
}
*/

const packingLists = ["bowls", "plates", "pots", "pans", "eating utensils", "glasses", "cups", "cooking utensils"];

/*
console.log("Kitchen stuff to pack:");
for (let packingList of packingLists) {
  console.log(packingList);
}
*/

/*
console.log("Kitchen stuff to pack:");
packingLists.forEach(function(item){
  console.log(item)
})
*/

/* 
console.log("Kitchen stuff to pack:");
var list = packingLists.map(function(item){
  console.log(item)
})
*/

console.log("Kitchen stuff to pack:");
let i = 0;
while (i < packingLists.length) {
  console.log(packingLists[i]);
  i++;
}