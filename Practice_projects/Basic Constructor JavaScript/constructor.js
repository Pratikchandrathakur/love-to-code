// Write code below 💖
const car1={
  make:"Ford",
  model:"Mustang",
  year:2024,
  color:"purple",
  drive(){
    // console.log(`You drive the ${car1.make} ${car1.model}`)
    console.log(`You drive the ${this.make} ${this.model}`) // this makes this method a constructor function.
  }
}

car1.drive()
