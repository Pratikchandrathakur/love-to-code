// Write code below 💖
pig={name:"Tummy",type:"pig",age:4,makeSound(){
  return `${pig.name} is ${pig.age} years old ${pig.type} that goes oich oich!`
}
}
sheep={name:"Shaun",type:"sheep",age:7,makeSound(){
  return `${sheep.name} is ${sheep.age} years old ${sheep.type} that goes bhei bhei!`
}
}
dog={name:"Benny",type:"dog",age:6,makeSound(){
  return `${dog.name} is a ${dog.age} years old ${dog.type} that goes woof woof!`
}
}

console.log(dog.makeSound())
console.log(pig.makeSound())
console.log(sheep.makeSound())



