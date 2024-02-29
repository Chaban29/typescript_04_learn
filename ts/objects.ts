// first variant to create object with TS

const personalInformation: {
  name: string;
  age?: number;
  isProgrammer?: boolean | undefined;
} = {
  name: 'Roman',
  age: 23,
  isProgrammer: undefined,
};

// second variant to create object with TS

type User = Partial<{
  name: string;
  age: number;
  hasComputer: boolean;
}>;

const userInfo: User = {
  name: 'Roman',
  age: 23,
  hasComputer: true,
};

// third variant to create object with TS

interface Car {
  model: string;
  releaseYear: number | 2023;
  color: string;
  isDiesel: boolean | string;
  wheels: number;
}

type myCar = Readonly<Car>;

const userCarParams: myCar = {
  model: 'Tesla',
  releaseYear: 2024,
  color: 'Black&White',
  isDiesel: false,
  wheels: 4,
};


