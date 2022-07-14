//String Length

const str1="Do";       
const str= "You know how I am?";    
console.log(str.length);

//accessing specific character at given index
console.log(str[0],str[4],"that",str[13],str[16],
"In love with the comma method❤?");

let lwrString = str.toLowerCase();
console.log(str);

//now magic

let replacedChars= str.replace("how","who");
let replacedChars2= str.replace("how I am","where am I");
console.log(str1,replacedChars,`\n${str1} ${replacedChars2}`);

//Concatination of strings

let strN= str1+str;
console.log(strN);
