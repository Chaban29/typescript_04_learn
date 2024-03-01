interface User {
  userAge: number;
}

const user: User = {
  userAge: 23,
};

const showUserAge = (user: { userAge: number }): number => {
  return user.userAge;
};

console.log(showUserAge(user));



const consoleCarColor = (car: {color: string}): string => car.color;


