//Створення User   Task первий 
const user =  {
    firstName: "Sem", 
    lastName: "Semovich",
    emailUser: "sem_semovich@mail.com",
    passwordUser: "qwerty",
    phoneNrUser: "+48 324 124 214",
    adressUser:  {
        cityAdress: "Paris",
        streetAdress: "Adamowicha 25",
        houseAdress: 243,
        apartamentAdress: 12,
    },
};
console.log('user', user);
const greeting = greetingUser(user.firstName, user.lastName);
console.log(greeting);

const car = {
  color: "black",
  model: "A6",
  make: "Audi",
  engineDisplacement: 2.0,
  capacity: 5,
  speed: 0,
  maxSpeed: 250,

  accelerate(valueOfSpeed) {
    this.speed += valueOfSpeed;

    if (this.speed > this.maxSpeed) {
      this.speed = this.maxSpeed;
    }
  },

  deaccelerate(valueSpeed) {
    this.speed -= valueSpeed;

    if (this.speed < 0) {
      this.speed = 0;
    }
  },

  stop() {
    this.speed = 0;
  },
};

console.log(car);

car.accelerate(100);
console.log(car.speed);

car.accelerate(200);
console.log(car.speed);

car.deaccelerate(50);
console.log(car.speed);

car.stop();
console.log(car.speed);

const car1 = new Car("black", "A6", "Audi", 2.0, 5, 0, 250);
const car2 = new Car("white", "Camry", "Toyota", 2.5, 5, 50, 210);
const car3 = new Car("red", "Model 3", "Tesla", 0, 5, 20, 225);

console.log(car1);
console.log(car2);
console.log(car3);

car1.accelerate(100);
console.log(car1.speed);

car2.deaccelerate(60);
console.log(car2.speed);

car3.stop();
console.log(car3.speed);