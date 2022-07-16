// function functionname

// function declaration
/*Note that in Javascript ,unlike c++ , there is no separate declaration and definition 
instead the declaration itself defines the function simultaneously*/ 
function managerFunc1() {
    console.log("The attendence of today is", 345);
  }
  
  function managerFunc2() {
    console.log("Cleanliss has been done .");
  }
  
  function managerFunc3() {
    console.log("New Employyes are hired .");
  }
  
  //boss calling for attendence
  console.log("Boss calling for attendence");
  managerFunc1(); // function call
  
  console.log("Boss calling for cleanliness");
  managerFunc2(); // function call
  
  console.log("Boss calling for hiring");
  managerFunc3(); // function call