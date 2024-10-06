function Car(make,model,year,color){
  this.make=make;
  this.model=model;
  this.year=year;
  this.color=color;
  // this.displayCar(){
  //   console.log(`You drive ${this.model} `); this direct is only done in object direct creation but in constructor must be done in conventional way.
  // }
  this.displayCar=function(){
    console.log(`You drive ${this.model} `);
  }
  
}

const car1=new Car("Ford","Mustang",2024,"Red");
const car2=new Car("Chevoret","camero",2023,"Yellow");
const car3=new Car("Dodge","Challenger",2024,"Black");

car1.displayCar();
