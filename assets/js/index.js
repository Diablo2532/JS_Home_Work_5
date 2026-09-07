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
const greeting = greetingUser(user.firstName, user.lastName);
console.log(greeting);

propertiesUser(user);