function getNumber(value: number) {
  return value;
}

function getArray(value: string[]) {
  return value;
}

// 제네릭 기본 문법 - 함수
function getValue<T>(value: T): T {
  return value;
}
getValue("hi").toLocaleUpperCase();
getValue(100).toLocaleString();

// 제네릭 기본 문법 - 인터페이스
interface Developer<T> {
  name: string;
  age: T;
}
const tony: Developer<number> = { name: "tony", age: 100 };

// 제네릭 타입 제한 - 구체적인 타입
function getNumberAndArray<T>(value: T): T {
  value.length; // X
  return value;
}

function getNumberAndArray<T>(value: T[]): T[] {
  value.length; // O
  return value;
}

// 제네릭 타입 제한 - keyof
interface ShoppingItems {
  name: string;
  price: number;
  address: string;
  stock: number;
}
function getAllowedOptions<T extends keyof ShoppingItems>(option: T): T {
  if (option === "name" || option === "address") {
    console.log("option type is string");
    return option;
  }
  if (option === "price" || option === "stock") {
    console.log("option type is number");
    return option;
  }
}
getAllowedOptions("nothing");
// const a = getAllowedOptions('name');
// a.toUpperCase(); // Name

// interface에서 dropdown을 선언하는 방법

// interface DropDown {
//   value: string;
//   selected: boolean;
// }

// // value에는 스트링값이 들어가야한다
// const obj: DropDown = { value: 10, selected: false };

interface DropDown<T> {
  value: T;
  selected: boolean;
}

// value에는 스트링값이 들어가야한다
const obj: DropDown<string> = { value: "10", selected: false };
