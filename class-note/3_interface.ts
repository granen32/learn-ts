// 이후에 user라는 타입을 계속 사용할 수 있게 해주는 것
interface User {
  age: number;
  name: string;
}

let granen32: User = {
  age: 33,
  name: 'granen32',
};

function getUser(user: User): void {
  return console.log(user);
}
const kyu = { name: 'granen', age: 100 };
getUser(kyu);

// 함수의 스펙(구조)에 인터페이스를 활용

interface SumFunciton {
  (a: number, b: number): number;
}

let sum: SumFunciton;
sum = function (a: number, b: number): number {
  return a + b;
};
