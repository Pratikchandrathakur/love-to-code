const arr=[1,2,3]
try{
  const element=arr[5]; // accessing non-existent element from the error.
  console.log("Acessing element:" +element);
  console.log("This message will be reached.");
}
catch(error){
  console.error("An error occured while acessing the array element: ",error.message);
}
console.log("Program continues after the error handling.")

// Accessing non-existent elements in an array does not throw an error, but it returns undefined.
// Therefore, the catch block won't be executed in this case because there is no error. The console.log will still run.
