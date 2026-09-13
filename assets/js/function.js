/**
 * Виводить привітання користувачу з його ім'ям та прізвищем.
 * 
 * @param {string} firstName Ім'я користувача.
 * @param {string} lastName Прізвище користувача.
 * @returns {string} Рядок із привітанням.
 */
function greetingUser (firstName, lastName ) {
    return `Доброго дня, ${firstName} ${lastName}`;
    
};
/**
 *
 * @param {string} firsName Ім'я користувача.
 * @param {string} lastName Прізвище користувача.
 * @returns {string} Рядок із привітанням.
 */
function greetingUser(firsName, lastName) {
  return `Доброго дня, ${firsName} ${lastName}`;
}
/**
 * Приймає об’єкт і виводить у консоль усі його властивості,
 * включно з властивостями вкладеного об’єкта.
 *
 * @param {object} object Об’єкт користувача.
 * @returns {void} Функція нічого не повертає.
 */
function propertiesObject(object) {
  for (const parameter in object) {
    console.log(parameter, object[parameter]);
  }
}

/**
 * Конструктор для створення об'єкта автомобіля.
 *
 * @param {string} color Колір автомобіля.
 * @param {string} model Модель автомобіля.
 * @param {string} make Марка автомобіля.
 * @param {number} engineDisplacement Об'єм двигуна.
 * @param {number} capacity Максимальна кількість пасажирів.
 * @param {number} speed Поточна швидкість автомобіля.
 * @param {number} maxSpeed Максимальна швидкість автомобіля.
 */
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


function createFamily() {
  const family = {};

  let quantity = Number(prompt("Введіть кількість членів родини (мінімум 2):"));

  while (quantity < 2 || isNaN(quantity)) {
    quantity = Number(prompt("Введіть кількість членів родини (мінімум 2):"));
  }

  for (let i = 0; i < quantity; i++) {
    const role = prompt("Введіть роль члена родини:");
    const name = prompt("Введіть ім'я:");

    family[role] = name;
  }

  return family;
}



