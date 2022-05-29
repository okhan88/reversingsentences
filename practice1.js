// Let the input string be “i like this program very much”. The function should change the string to “much very program this like i”

// Examples:
// Input: s = “geeks quiz practice code” 
// Output: s = “code practice quiz geeks”

// Input: s = “getting good at coding needs a lot of practice” 
// Output: s = “practice of lot a needs coding at good getting” 

/*
 step 1: let string1 = "i like this program very much"



*/

let fruits = ["banana", "cherry"]
let fruitsstring = fruits.join(', ')
console.log (fruitsstring)
// output: "banana, cherry"

let veges = ["carrot", "green"]
let added = veges.push ("spinach")
console.log (veges)
// output: [ 'carrot', 'green', 'spinach' ]


const str = 'The quick brown fox jumps over the lazy dog.';

const words = str.split(' ');
console.log(words[1]);
// expected output: "quick"

const chars = str.split('');
console.log(chars[0]);
// expected output: "T"


let vegetables = ['parsnip', 'potato']
let moreVegs = ['celery', 'beetroot']

// Merge the second array into the first one
vegetables.push(...moreVegs);

console.log(vegetables)  // ['parsnip', 'potato', 'celery', 'beetroot']