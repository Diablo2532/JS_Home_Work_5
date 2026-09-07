/**
 * Виводить привітання користувачу з його ім'ям та прізвищем.
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
 * @param {object} user Об’єкт користувача.
 * @returns {void} Функція нічого не повертає.
 */
function propertiesUser(user) {
  for (const parameter in user) {
    if (typeof user[parameter] === "object" && user[parameter] !== null) {
      for (const addressParameter in user[parameter]) {
        console.log("address parameter", user[parameter][addressParameter]);
      }
    } else {
      console.log("parameter", user[parameter]);
    }
  }
}


