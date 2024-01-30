function Person(name, age) {
  this.name;
  this.age;
}
class Person {
  constructor(name, age) {
    console.log("생성되었습니다.");
    this.name = name;
    this.age = age;
  }
}
// function Person === class Person과 같다.
let granen = new Person("granen", 32);
console.log(granen);
