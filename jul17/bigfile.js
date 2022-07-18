// whenever we have big code structure then we separate codes into different small files
// whenver we need those files, we need to export them from that file and import in the big file

const { component1, component4, component3 } = require("./small");
const component2 = require("./small2");
const array1 = require("./countrydata");
component1();
component3();// No matter the order while importing Component 3 takes Component 3 key:value
component4();
component2();
console.log(array1);