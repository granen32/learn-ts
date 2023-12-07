// js 문자열 선언

var varstr = 'hello';

// ts문자열 선언
let str: string = 'hello';
// TS NUMBER
let num: number = 10;
// ts array number
let arr: Array<number> = [1, 2, 3];
// ts array string
let heroes: Array<string> = ['iron main', 'capt', 'thor'];
// array literals
let items: number[] = [1, 2, 3];

// ts tuple 두 가지 이상의 타입을 넣어주는 것
let adress: [string, number] = ['gangnam', 190];

// ts object 객체 정의 방식
let obj: object = {};

// 이렇게 객체를 오브젝트라고 하면 타입검사가 끝나버림
// let person: object = {
//   name: 'capt',
//   age: 100,
// };
let person: { name: string; age: number } = {
  name: 'capt',
  age: 100,
};

// ts 진위값
let show: boolean = true;
