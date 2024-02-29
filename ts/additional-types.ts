const test: any = 100;
const notValue: unknown = true;

// void

function foo(arg: string): void {
  console.log(arg);
}

foo('this value is empty');

const foo_2 = (arg: string): void => console.log(arg);

foo_2('this value is empty');
