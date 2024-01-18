/**
 * <T> -> 제네릭을 받겠다
 * -> 파라매터에 제네릭 설정
 * 그 이후에 반환하는 리턴값은 제네릭한 값이여야함
 */
// function logText<T>(text: T): T {
//   // 함수를 하나 정의했고 파라미터를 그대로 정의해주는 것 -> 10 -> 10//hi -> hi
//   console.log(text);
//   return text;
// }

// logText(10);
// logText('hi');
// logText(true);

// 텍스트만 받게됨 하지만 여기서 Number를 받고 싶으면? 타입을 다르게 받기 위해서 중복되는 코드가 생길 수 있음
function logText(text: string) {
  console.log(text);
  text.split('').reverse().join();
  return text;
}

// union type을 하면 되지 않냐고 하지만 string | number인 경우에는
/**
 * 문자열하고 넘버에서 활용할 수 있는 메서드만 사용이 가능하다 -> 이런 점 때문에 union을 활용하는 게 애매해지만
 */

function unionDisAdvantage(text: string | number) {
  console.log(text);
  // number와 string에 공통 메서드만 나옴
  text.toLocaleString();
  text.toString();
  text.valueOf();
  return text;
}

function genericAdvantage<T>(text: T): T {
  console.log(text);
  if (typeof text === 'string') {
    text.split('');
  }
  if (typeof text === 'number') {
    text.toFixed(2);
  }
  return text;
}

const stri = genericAdvantage<string>('abc');
stri.charAt(2);
const login = genericAdvantage<boolean>(true);
