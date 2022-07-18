// data is transferred from backend to frontend in the form of objects
// objects are heavy so we need to lightweight them before transporting
// so we convert object into lightweight form called as "JSON" (Javascript Object notation)
// JSON basically means convert object into string form
// JSON is stringified Object

const mydetails = {
    name: "Ashutosh", //key:value
    age: "22",
    city: "gorakhpur",
    job: "dev",
  };
  console.log("Before converting into JSON");
  console.log(mydetails);
  
  // converting object into json => JSON.stringify(Object)  function is used (backend to frontend transport)
  let jsondata = JSON.stringify(mydetails);
  console.log("\nAfter converting into json");
  console.log(jsondata);
  
  // json needs to be converted/parsed back into object for uses at frontend
  // converting json into object => JSON.parse(json)  function is used at frontend to convert back into object
  
  let convertedObject = JSON.parse(jsondata);
  console.log("\nAfter converting json back into object");
  console.log(convertedObject);