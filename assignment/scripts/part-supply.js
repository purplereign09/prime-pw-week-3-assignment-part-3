console.log('****** Part Supply *******');
// REQUIRED FEATURES

// 1. Create a variable called 'partsNeeded' with a value of the number 40
//    & console.log the variable
let partsNeeded = 40;
console.log('1. Number of partsNeeded:', partsNeeded);

//console.log(partsNeeded);

// 2. Create a variable call 'supplyChanges' set it to an array containing
//    the following numbers: 3, 5, -6, 0, 7, 11
console.log('2. Array of supplyChanges:');
let supplyChanges = [ 3, 5, -6, 0, 7, 11];

// 3. Console log the value of 'supplyChanges' at index 2
console.log('3. Item at index 2 is:', supplyChanges[2]);
//console.log(supplyChanges[2]);

// 4. The last item was added by mistake. Remove it from the 'supplyChanges'
//    array & console.log the value removed.
supplyChanges.pop();
let x = supplyChanges.pop();
//console.log(x);
console.log('4. Removed item:', x);


// 5. A delivery of 25 more parts arrived. Add the value 25 to the end of the array
let i = supplyChanges.push(25);
console.log(supplyChanges);


// 6. Write a `for` loop that shows each value in the 'supplyChanges' array
//    Use a console.log formatted as follows, where x is the value from the array
//    - if it is a positive number (greater than 0), log 'Added x parts.'
//    - if the value is 0, log 'No Change.'
//    - if the value is negative, format the log as 'Removed x parts.'


for(let x = 0; x < supplyChanges.length; i++) {
if(supplyChanges[x] > 0) {
  console.log(`Added ${supplyCharges[x]} parts.`);
} else if (supplyChanges[x] === 0){
  console.log(`No change.`);
} else if (supplyChanges[x] < 0){
  console.log(`Removed ${supplyChanges[x]} parts.`);
}

// STRETCH GOALS
console.log('---  Stretch Goals  ---');
// 7. Rewrite the `for` loop from #6 as a `for of` loop.
console.log('7. Showing supplyChanges with "for of" loop');

for(let i of supplyChanges) {
  console.log(i);
}

i = 4;
//i = 0;
//i = -1;
if(supplyChanges[i] > 0) {
  console.log('Added x parts.');
} else if (supplyChanges[i]===0){
  console.log('No change.');
} else if (supplyChanges[i] < 0){
  console.log('Removed x parts.');
}

// 8. Rewrite the `for` loop from #6 as a `while` loop.
console.log('8. Showing supplyChanges with "while" loop');

i = 2;
while(supplyChanges[i] > 0) {
  console.log('Added x parts.');
} if (supplyChanges[i]===0){
  console.log('No change.');
} else if (supplyChanges[i] < 0){
  console.log('Removed x parts.');
}

// 9. Write a loop to determine the total number of parts available by
//    adding up all the numbers in the 'supplyChanges' array.
console.log('9. Total supplies available is:');

let sum = 0;
for(let n of supplyChanges)
sum += n
console.log(`Total ${sum}`);
