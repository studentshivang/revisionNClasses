const component1 = () => {
    console.log("Hello there from the small file 1");
  };
  
  const component3 = () => {
    console.log("Hello there from the component 3");
  };
  
  const component4 = () => {
    console.log("Hello there from the component 4");
  };
  
module.exports = { component1, component3, component4 }; 
//OR
//   module.exports.component1 = component1;
//   module.exports.component3 = component3;
//   module.exports.component4 = component4;
