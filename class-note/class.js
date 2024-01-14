class Person {
  constructor(name, age) {
    console.log("생성되었습니다.");
    this.name = name;
    this.age = age;
  }
}

let granen = new Person("granen", 32);
console.log(granen);
