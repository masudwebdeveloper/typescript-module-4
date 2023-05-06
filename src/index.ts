// class Animal {
//   constructor(
//     public name: string,
//     public species: string,
//     public sound: string
//   ) {}
//   public makeSound() {
//     console.log(`The ${this.name} says ${this.sound}`);
//   }
// }

// const dog = new Animal("German Shepard", "Dog", "Ghew Ghew");
// const cat = new Animal("Persian", "Cat", "Mew Mew");
// cat.makeSound();
// dog.makeSound();

// dog.name = "Kate winslet";

// class Student {
//   name: string;
//   age: number;
//   address: string;
//   constructor(name: string, age: number, address: string) {
//     this.name = name;
//     this.age = age;
//     this.address = address;
//   }

//   makeSleep(hours: number): string {
//     return `${this.name} per day sleep ${hours} hours`;
//   }
// }

// const masud = new Student("Masud", 25, "Natore");
// const result = masud.makeSleep(6)
// console.log(result);

// type AlphaNumeric = string | number;

// function add(param1: AlphaNumeric, param2: AlphaNumeric): AlphaNumeric{
//   if(typeof param1 === 'number' && typeof param2 === 'number'){
//     return param1 + param2;
//   }else{
//     return param1.toString() + param2.toString();
//   }
// }

// const result1 = add('1','2');
// const result2 = add(1,2);

// console.log({result1, result2});

// type NormalUser = {name: string};
// type AdminUser = {name: string; role: 'admin'};

// function getUser(user: NormalUser | AdminUser): string{
//   if('role' in user){
//     return `This is ${user.role} user`;
//   }else{
//     return 'This is normal user';
//   }
// }

// const normalUser = {name: "Masud"};
// const adminUser = {name: "Rana", role: "admin"};

// console.log(getUser(normalUser));
// console.log(getUser(adminUser));

// class Animal {
//   name: string;
//   species: string;

//   constructor(name: string, species: string) {
//     this.name = name;
//     this.species = species;
//   }

//   makeSound() {
//     return "I am sound";
//   }
// }

// class Dog extends Animal {
//   constructor(name: string, species: string) {
//     super(name, species);
//   }
//   makeBark() {
//     console.log("I am barking");
//   }
// }

// class Cat extends Animal {
//   constructor(name: string, species: string) {
//     super(name, species);
//   }
//   makeMeaw() {
//     console.log("I am meawing");
//   }
// }

// function isDog(animal: Animal): animal is Dog {
//   return animal instanceof Dog;
// }

// function isCat(animal: Animal): animal is Cat {
//   return animal instanceof Cat;
// }

// function getAnimal(animal: Animal) {
//   if (isDog(animal)) {
//     animal.makeBark();
//   } else if (isCat(animal)) {
//     animal.makeMeaw();
//   } else {
//     animal.makeSound();
//   }
// }

// const animal1 = new Dog("German Shepard", "dog");
// const animal2 = new Cat("Italian Cat", "Cat");
// getAnimal(animal2);
// getAnimal(animal1);

// video number 4.5 access modifiers: private, public and protected
// class BankAccount{
//   public id: number;
//   public name: string;
//   protected _blance: number;

//   constructor(id: number, name: string, blance: number){
//     this.id = id;
//     this.name = name;
//     this._blance = blance;
//   }
//   getBlance(){
//     console.log(`My current Blance is ${this._blance}`);
//   }

//   addDeposit(amount: number){
//     console.log(this._blance + amount);
//   }

// }

// class StudentAccount extends BankAccount{
//   test(){
//     this.addDeposit
//   }
// }

// const myAccount = new BankAccount(1254, "Masud", 10);
// myAccount.getBlance();
// myAccount.addDeposit(20)
// console.log(myAccount);

// video number 4.6 getter and setter
// class BankAccount{
//   public id: number;
//   public name: string;
//   protected _blance: number;

//   constructor(id: number, name: string, blance: number){
//     this.id = id;
//     this.name = name;
//     this._blance = blance;
//   }

//   //getter
//   get blance(){
//     return this._blance;
//   }
//   // getBlance(){
//   //   console.log(`My current Blance is ${this._blance}`);
//   // }

//   // setter
//   set deposit(amount:number){
//     this._blance = this.blance + amount;
//   }
//   // addDeposit(amount: number){
//   //   console.log(this._blance + amount);
//   // }

// }

// class StudentAccount extends BankAccount{
//   test(){
//     // this.addDeposit
//   }
// }

// const myAccount = new BankAccount(1254, "Masud", 10);
// // myAccount.getBlance();
// // myAccount.addDeposit(20)
// myAccount.deposit = 20
// console.log(myAccount.blance);

// video number 4.7 static

// class Counter{
//   static count: number = 0;
//   // constructor(count:number){
//   //   this.count = count;
//   // }
//   static increment(): number{
//     return Counter.count = Counter.count + 1
//   }
//   static decrement(): number{
//    return Counter.count = Counter.count - 1
//   }
// }

// // const instence1 = new Counter();
// // const instence2 = new Counter();
// console.log(Counter.increment());
// console.log(Counter.increment());

//video number 4.8 polymorphism
// class Person {
//   takeNap(): void {
//     console.log("I am sleeping 6 hours per day");
//   }
// }

// class Student extends Person {
//   takeNap(): void {
//     console.log("I am sleeping 8 hours per day");
//   }
// }

// class Developer extends Person {
//   takeNap(): void {
//     console.log("I am sleeping 5 hours per day");
//   }
// }

// function getNap(param: Person) {
//   return param.takeNap();
// }

// const person1 = new Person();
// const person2 = new Student();
// const person3 = new Developer();

// getNap(person3);
// getNap(person1);
// getNap(person2);

// class Shape {
//   getArea(): number {
//     return 0;
//   }
// }

// class Circle extends Shape {
//   radius: number;
//   constructor(radius: number) {
//     super();
//     this.radius = radius;
//   }
//   getArea(): number {
//     return Math.PI * this.radius * this.radius;
//   }
// }

// class Rectangle extends Shape {
//   height: number;
//   width: number;
//   constructor(height: number, width: number) {
//     super();
//     this.height = height;
//     this.width = width;
//   }
//   getArea(): number {
//     return this.height * this.width;
//   }
// }

// function getAreaOfShape(param: Shape) {
//   console.log(param.getArea());
// }

// getAreaOfShape(new Circle(10))
// getAreaOfShape(new Rectangle(10,10))

// video number 4.9 abstraction

// interface IVehicle{
//   name: string;
//   model: number;
// }

// const vehicle: IVehicle ={
//   name: "toyota",
//   model: 2000
// }

// interface class
// interface IVehicle {
//   startEngine(): void;
//   stopEngine(): void;
//   move(): void;
// }

// class Vehicle implements IVehicle {
//   constructor(
//     public name: string,
//     public brand: string,
//     public model: number
//   ) {}
//   startEngine(): void {
//     console.log("I am now starting");
//   }
//   stopEngine(): void {
//     console.log("I am now stoping");
//   }
//   move(): void {
//     console.log("I am now moving");
//   }
//   test(): void {
//     console.log("I am testing for Engine");
//   }
// }

// const vehicle1 = new Vehicle('car', 'toyota',2000);
// console.log(vehicle1);
// console.log(vehicle1.startEngine());

// abstraction class
abstract class Vehicle {
  constructor(
    public name: string,
    public brand: string,
    public model: number
  ) {}
  abstract startEngine(): void;
  abstract stopEngine(): void;
  move(): void {
    console.log("I am moving now...");
  }
}

class Car extends Vehicle {
  startEngine(): void {
    console.log("I am starting car...");
  }
  stopEngine(): void {
    console.log("I am stoping car...");
  }
}

const car1 = new Car("car", "toyota",2000);
console.log(car1.move());

