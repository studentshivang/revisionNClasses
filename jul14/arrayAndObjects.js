// how to declare an array
let arr = ["value 1", "value 2", "value 3", "value 4"];

//printing an array
console.log(arr); // i did not know ,we could do this
//thanks for reminding sir 🙏

//priting array length
console.log(arr.length);

//accessing a particular element in an array
console.log(arr[0], `\n${arr[3]}`);

//mutating(changing) an element in an array
arr[2] = "mutated value 3";
console.log(arr);

//printing all elements of an array
for (let index = 0; index < arr.length; index++) {
  console.log(arr[index]);
}
console.log("\n");
//or
arr.forEach((element) => console.log(element));

//OR
arr.forEach((element, index) => console.log(index, element));

// adding element to array
arr.push("value 5");
console.log(arr);
//adds given value at the ending
arr.push("value 6");
console.log(arr);

// removing last element
arr.pop();
console.log(arr);
//going again
arr.pop();
console.log(arr);
