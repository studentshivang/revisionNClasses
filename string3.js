//trimming 
//this method removes whitespace from both sides of a string.
let bigstring = "      hari   #   ";
let trimmedstring = bigstring.trim();
console.log(trimmedstring);

//2nd try
let bigstring2 = "      hari      haraye     namah  ";
let trimmedstring2 = bigstring2.trim();
console.log(trimmedstring2);


//time for some splitting
//magic again
let nstr="hello.jpg";
let arr=nstr.split('.');
console.log(arr);

//returns an array of strings ,obtained on splitting the original

//also it can split all characters in a string (as below)

let arrchar=nstr.split('');
console.log(arrchar);

nstr="hello world";
console.log(nstr.split(''));//splits all characters , including spaces 

nstr="hello.jpg";
arr =nstr.split('.');
console.log(arr[0],arr[1]);

let nBigString="Hello from the other side . I must have called a 1000 times !";
console.log(nBigString.split(" ",6));
//second param -> limit parameter