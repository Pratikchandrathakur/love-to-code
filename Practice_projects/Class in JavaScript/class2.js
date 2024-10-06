// Write code below 💖
class Product{
  constructor(product,price){  //-- Constructor inside class can be used to define normal properties of each objects instances of this class.
    this.Product=product;
    this.Price=price;
  }
  displayProduct(){  // -- these methods are specially defined to do certain task with the properties defined in constructor.
    console.log(`Product : ${this.Product} \nPrice: $${this.Price.toFixed(2)}`)
  }
  calculateSaleTax(saleTax=0.08){
    return this.Price+(this.Price)*saleTax  
  }
}
const product1=new Product("Shirt",18.99);
const product2=new Product("Pant",23.99);
const product3=new Product("Underwear",60);

// Checking for product 3:
product3.displayProduct();
total=product3.calculateSaleTax()
console.log(`The (total price with tax): $${total.toFixed(2)}`)
