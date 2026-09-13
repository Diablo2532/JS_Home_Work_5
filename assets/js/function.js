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



