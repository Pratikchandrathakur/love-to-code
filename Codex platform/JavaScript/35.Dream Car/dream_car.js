// Write code below 💖

const car = { };

car.model="Tesla";
car.year="2020";
car.color="Red";
car.used=false;

console.log(car);
if (car.used){ // i will pass default which is true if in case i have used one when my showroom has new one i will explicitly define that i have car.used===false
console.log(`I'm looking for a ${car.year} ${car.model} that is new.`)

}else{
  console.log(`I'm looking for a ${car.year} ${car.model} that is used.`)
}
