function generateUniqueArray(size, min, max) {
  const uniqueArray = [];

  while (uniqueArray.length < size) {
    const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;

    if (!uniqueArray.includes(randomNumber)) {
      uniqueArray.push(randomNumber);
    }
  }

  return uniqueArray;
}

const uniqueRandomArray = generateUniqueArray(5, 1, 20);
console.log(uniqueRandomArray); 
