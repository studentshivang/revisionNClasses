
function manager4(nameofemployee, test2) {
    console.log("Report of Employee", nameofemployee, test2);
  }

  
console.log("Boss calling for employee data");
manager4("Ashutosh", "hfjlahfljahfd"); // function call
manager4("Satyam", "hshdks"); // function call
manager4("Msihra"); // function call
manager4("test"); // function call
manager4("test 2"); // function call

// function which return something is needed to be stored somethere when function is called
function sum(a, b) {
    return a + b;
  }

  function subs(a, b) {
    return a - b;
  }
  
function div(a, b) {
    return a / b;
  }

  function prod(a, b) {
    return a * b;
  }
  

  function totalsum(a, b, c, d, e, f) {
    return a + b + c + d + e + f;
  }

  let ans = sum(4, 5);
console.log(ans);

let ans2 = sum(100, 5);
console.log(ans2);

let subsans2 = subs(100, 5);
console.log(subsans2);

let ans3 = div(100,7);
console.log(ans3);

let ans4 = prod(100,7);
console.log(ans4);


let totalsumvalue = totalsum(1, 2, 3, 4, 5, 6);
console.log(totalsumvalue);

//Rest operator

function sum2(...rest){
    let sum=0;
    rest.forEach(ele=>sum+=ele)
    return sum;
}

let ans5=sum2(1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19);
console.log(ans5);
// No argument based function ===> no argument is sent when function is called

// Argument based function ==> function takes arguments when it is called

// return type functions => these functions return some values, which are then needed to be stored somewhere to use it
