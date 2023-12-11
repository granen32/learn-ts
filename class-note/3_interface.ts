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

// 인덱싱
interface StringArray {
  [index: number]: string;
}

var arr: StringArray = ['a,', 'b', 'c'];
// arr[0] = 10; // "a"

// 딕셔너리 패턴
interface StringRegexDictionary {
  [key: string]: RegExp;
  // 정규 표현식 생성자
}

// 정규식 패턴
let regexObj: StringRegexDictionary = {
  sth: /abc/,
  // RegExp 정규표현식이 와야 하는데 문자열이 왔기 때문에 오류
  //   cssFile: 'css',
  // 정규표현식으로
  cssFile: /\.css$/,
  jsFile: /\.js$/,
};

Object.keys(regexObj).forEach(value => {
  console.log(value);
});

interface Person {
  name: string;
  age: number;
}
// person과 중복되는 부분이 있음 이럴 때 extends를 활용하면됨
interface Developer extends Person {
  language: string;
}

let captain: Developer = {
  // developer에는 person이 속해있기 때문에
  name: '캡틴',
  age: 100,
  language: 'hi',
};
