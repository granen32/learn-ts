// 타입 추론
// 아무것도 할당하지 않았으므로 처음에는 any가 할당됨
// let a;

// 변수선언 후 10을 할당하면 타입을 대충 추론해줌 하지만 a=10일 경우 그저 any임
let a = 10;
// 타입을 할당하지 않았으므로 function getB(b: any): any
/**
 * 기본 값을 설정할 경우 타입 추론을 해줌
 */
function getB(b = 10) {
  let c = 'hi';
  // c type inference === string
  return b + c;
}

10 + '10'; // 1010이 됨

interface DropDown<T> {
  value: T;
  title: string;
}

let shoppingItem: DropDown<string> = {
  value: '값',
  title: 'title',
};

interface DetailedDropDown<T> extends DropDown<T> {
  description: string;
  tag: T;
}
// 제네릭을 넘겨줄 때 제네릭하게 넘겨줄수도 있음
let detailedItem: DetailedDropDown<string | number> = {
  value: '값',
  title: 'title',
  description: 'HI',
  tag: 1,
};
