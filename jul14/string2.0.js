let strNew="In love with the comma method";

//slice function
/*You like pastries,cakes don't you 
nicely sliced breads and chocolates and cassatas!
Now its time that you can finally slice a string,wohoo!! */

console.log(strNew.slice(9,15));
//from index>=9 to indexno.<15
console.log(strNew[15]);

//single parameter slice
console.log(strNew.slice(8));
//from index>=8 till null charcter

//negative parameter slice
console.log(strNew.slice(-11));
//11 characters starting from back,in original order only


/*If done with the slicing
try searching...
who am I?
"Meaning of life"

Try searching a string to begin with

//Search function/method
*/

console.log(strNew.search("love"));//returns start index ,if found
console.log(strNew.search("hatred"));
//returns -1 on failing to find


/*It seraches the string for a given regex */
console.log('\n');
console.log(strNew.search("Love"));
console.log(strNew.search(/Love/i));//case in-sensitive search


//it can also search inside a word 
console.log('\n');
console.log(strNew.search(/ove/));
console.log(strNew.search(/\bove\b/));//also searching for whole word "ove"