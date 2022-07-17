// whenever we need to do error handling of codes we need to use try and catch block
// catch block catches errror of try block

const testfunction = () => {
    try {
      consle.log("Hello World");
    //   console.log("Hello World");
    } catch (err) {
      console.log(err.message);
    }
  };
  
  testfunction();