function prepareOrder() {
  return new Promise((resolve) => {
    const result = "Preparing order 🧑‍🍳";
    resolve(result);
  })
}

function serveOrder(result) {
  return new Promise((resolve) => {
    const result2 = `${result}, and now serving. Enjoy! 🍲`;
    resolve(result2);
  })
}

prepareOrder()
  .then((result) => serveOrder(result))
  .then((result2) => {
    console.log(result2)
  })
  .catch((error) => {
    console.log("Error:", error);
  })
