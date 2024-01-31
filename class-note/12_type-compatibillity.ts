interface Developer {
  name: string;
  skill: string;
}
interface Person {
  name: string;
}

// let developer: Developer;
// let person: Person;
// person = developer;

let add = function (a: number) {};

let sum = function (a: number, b: number) {
  return a + b;
};

sum = add;

interface Empty<T> {}

interface NotEmpty<T> {
  data: T;
}
