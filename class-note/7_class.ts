class Person {
  // class에서는 최상단의 매개변수의 타입을 전부 지정해줌
  /**
   * 변수의 접근 범위를 설정할 수 있음
   * private(클래스 내부에서만), public
   * readonly(읽기만 가능)
   */
  name: string;
  age: number;
  constructor(name, age) {
    console.log("생성되었습니다.");
    this.name = name;
    this.age = age;
  }
}
