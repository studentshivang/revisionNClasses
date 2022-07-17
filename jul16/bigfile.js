// whenever we have big code structure then we separate codes into different small files
// whenver we need those files, we need to export them from that file and import in the big file

const component1 = require("./small");
const component2 = require("./small2");
const array1 = require("./countrydata");
const arr1 = require('./smallfile3');
const arr = require('./smallfile3');
const arr5 = require('./smallfile4');
component1();
component2();
console.log(array1);
console.log(arr1);
console.log(arr);
console.log(arr5);