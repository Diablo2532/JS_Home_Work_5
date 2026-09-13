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