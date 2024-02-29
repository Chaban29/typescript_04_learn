const users: string = 'https://jsonplaceholder.typicode.com/users';

const getUsersFromApi = async (users: string): Promise<any> => {
  const response = await fetch(users);
  if (typeof response.status === 'number' && response.ok) {
    return await response.json();
  } else {
    return null;
  }
};

console.log(getUsersFromApi(users));

type Config = {
  status: string;
};
type Data = {
  data: number;
};


