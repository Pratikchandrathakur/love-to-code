class Car{
  constructor(make,model,year,color){  // this is a constructor so class just makes it clear by breaking constructor and simple methods in a structured format though a structure called blueprint of these objects.
    this.make=make;
    this.model=model;
    this.year=year;
    this.color=color;
  }
  displayCar(){   // ----> this is a normal function or so called method.
    console.log(`WoW, You drive a ${this.model}`);
  }
}
const car1=new Car("Ford","Mustang",2024,"Red");
const car2=new Car("Chevoret","Camero",2020,"Blue");
const car3=new Car("Dodge","Viper",2022,"Black");

car1.displayCar()
car2.displayCar()
car3.displayCar()


