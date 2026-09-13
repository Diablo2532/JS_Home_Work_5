function Car(color, model, make, engineDisplacement, capacity, speed, maxSpeed) {
  this.color = color;
  this.model = model;
  this.make = make;
  this.engineDisplacement = engineDisplacement;
  this.capacity = capacity;
  this.speed = speed;
  this.maxSpeed = maxSpeed;

  this.accelerate = function (value) {
    this.speed += value;

    if (this.speed > this.maxSpeed) {
      this.speed = this.maxSpeed;
    }
  };

  this.deaccelerate = function (value) {
    this.speed -= value;

    if (this.speed < 0) {
      this.speed = 0;
    }
  };

  this.stop = function () {
    this.speed = 0;
  };
}
