const test: any = 100;
const notValue: unknown = true;

// void

function foo(arg: string): void {
  console.log(arg);
}

foo('this value is empty');

const foo_2 = (arg: string): void => console.log(arg);

foo_2('this value is empty');

type Env = 'Development' | 'Production' | 'Release';

const production: Env = 'Production';

enum Env2 {
  Development = 'Development',
  Production = 'Production',
  Release = 'Release',
}

const whatProcessOfYourProject = (env: Env2) => {
  let result: string = '';

  if (env === 'Development') {
    return (result = 'Your project is Development');
  }
  if (env === 'Production') {
    return (result = 'Your project is Production');
  }
  if (env === 'Release') {
    return (result = 'Your project is Release!');
  }
  return result;
};

console.log(whatProcessOfYourProject(Env2.Development));