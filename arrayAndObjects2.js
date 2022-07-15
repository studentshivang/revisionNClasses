//Mapping ❤
let arr=[ 'value 1', 'value 2', 'mutated value 3', 'value 4' ];

arr.map((v) => console.log("addded", v));

const ages = [32, 33, 16, 40];
//deleting array element - filter method

console.log(ages.filter(v=>v!=33));

// OR

console.log(ages.filter((ele,index)=>{
    return index!=1;
}));

/*filter method creates a new array
(filled) with elements that pass a test provided by a function.*/
//filter() method does not change the original array.

/*Important: The filter() method does not execute the function for empty elements. */

