interface Developer {
  name: string;
  skill: string;
}
interface Person {
  name: string;
  age: number;
}

function introduce(): Developer | Person {
  return { name: 'tony', age: 33, skill: 'iron making' };
}

let tony = introduce();

// 유니온 타입을 쓰게 되면 공통된 타입만 쓸 수 있음
/**
 * 근데 이런식인 타입가드는 기초적인 타입가드임
 */
if ((tony as Developer).skill) {
  let skill = (tony as Developer).skill;
  console.log(skill);
} else if ((tony as Person).age) {
  let age = (tony as Developer).skill;
  console.log(age);
}
// is 를 활용해서 developer인지 확인 후 넘어감
function isDeveloper(target: Developer | Person): target is Developer {
  return (target as Developer).skill !== undefined;
}

if (isDeveloper(tony)) {
  let skill = tony.skill;
  console.log(skill);
} else {
  console.log(tony.age);
}
