function getSomeData() {
  const error = true;

  return new Promise((resolve, reject) => {
    if (!error) {
      resolve(); // The operation was successful
    } else {
      reject("An error happened along the way.");
    }
  });
}

console.log(getSomeData());
