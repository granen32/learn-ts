// 연산자를 이용한 타입정의
function logMessage(value: string) {
  console.log(value);
}

logMessage("hi");
// string 값이기에 number가 안됨
// logMessage(100);

// or 연산자를 쓰면됨 만약에 string,number를 같이 쓰고 싶다 하면

// union type을 쓰면됨

function logMessage2(value: string | number) {
  console.log(value);
}
logMessage2("hi");
logMessage2(100);

let granen: string | number | boolean;
function logMessage3(value: string | number) {
  // 이런 걸 보통 타입가드라고 한다.
  /**
   * 즉 Type Guard를 통해 컴파일러가 타입을 예측할 수 있도록 타입을 좁혀 주어서(narrowing) 좀 더 type safety함을 보장할 수 있습니다.
   */
  if (typeof value === "number") {
    value.toString();
  }
  if (typeof value === "string") {
    value.toString();
  }
}

interface Developer {
  name: string;
  skill: string;
}

interface Person {
  name: string;
  age: number;
}

function askSomeone(someone: Developer | Person) {
  // developer도 되야하고 persone도 되야하기 때문에 공통점인 부분만 되야하
  // someone.name;
  // someone.skill;
  // someone.age;
  // 여기서 타입가드를 통해서 접근을 해야됨->
}
askSomeone({ name: "capt", skill: "react" });
askSomeone({ name: "capt", age: 100 });
// 왜 never일까? 이 이유는 string이면서 넘버이면서 불린인게 나와야 함
let capt: string & number & boolean;

function askSomeone2(someone: Developer & Person) {
  // intersection 정의-> 타입가드가 별도로 필요없이 Developer & Person를 포함하는 하나의 function이라고함
  someone.age;
  someone.name;
  someone.skill;
}
/**
 * '{ name: string; skill: string; }' 형식의 인수는 'Developer & Person' 형식의 매개 변수에 할당될 수 없습니다.
  'age' 속성이 '{ name: string; skill: string; }' 형식에 없지만 'Person' 형식에서 필수입니다.ts(2345)
  이런 식으로 intersection을 사용하게 되면 이런 단점이 있다.
 */
// askSomeone2({ name: "capt", skill: "react" });

enum Answer {
  Yes = "Y",
  No = "N",
}

function askQuestion(answer: Answer) {
  if (answer === Answer.Yes) {
    console.log("정답입니다.");
  }
  if (answer === Answer.No) {
    console.log("오답입니다.");
  }
}
// enum에서 제공하는 값만 넘길 수 있음
// askQuestion("Yes");
askQuestion(Answer.No);
