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
 * @param {object} object Об’єкт користувача.
 * @returns {void} Функція нічого не повертає.
 */
function propertiesObject(object) {
  for (const parameter in object) {
    console.log(parameter, object[parameter]);
  }
}



