const obj=undefined
try{
  const objectProperty=obj.property;
  console.log("objectProperty:" +objectProperty )
  console.log("This message will be reached.")
}
catch(error){
  console.error("An error occured while accessing the property:",error.message)
}
console.log("Program continues after error handling.")
