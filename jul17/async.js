const fs = require("fs");

// synchronus way of function calling => next code runs only when the function call is completed
const timetakingfunction = () => {
  const readedfile = fs.readFileSync("read.txt", "utf-8");//(file_name,formatting)
  console.log(readedfile);
};

timetakingfunction();

console.log("Hello after the sync timetaking function\n");

// asynchronus way of function calling => this function returns promise that it will execute but need to wait till then next code can be run
// write async before fat arrow
const asynctimetakingfunction = async () => {
  const readedfile = await fs.readFileSync("read.txt", "utf-8");
  console.log(readedfile);
};
asynctimetakingfunction();


console.log("Hello after the async timetaking function");
