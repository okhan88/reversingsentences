// Let the input string be “i like this program very much”. The function should change the string to “much very program this like i”

// Examples:
// Input: s = “geeks quiz practice code” 
// Output: s = “code practice quiz geeks”

// Input: s = “getting good at coding needs a lot of practice” 
// Output: s = “practice of lot a needs coding at good getting” 

/*
 step 1: let string1 = ["i like this program very much"]
 step 2: split the first word ("i") out of string1 and assign a new const
 step 3: continue to split all the words in the string, assigning a new const for each one
 step 4: push the first word of the solution string ("much") into string2
 step 5: push the rest of the words in order into string2 in order to get desired string




*/


// long method below

const string1 = 'i like this program very much'
const word1 = string1.split(' ');
console.log (word1[0])
console.log (word1[1])
console.log (word1[2])
console.log (word1[3])
console.log (word1[4])
console.log (word1[5])


const list = []
    let added = list.push(word1[5], word1[4], word1[3], word1[2], word1[1], word1[0])
    console.log(list)

// outcome: [ 'much', 'very', 'program', 'this', 'like', 'i' ]



// function reversingWords() 





/*
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





*/