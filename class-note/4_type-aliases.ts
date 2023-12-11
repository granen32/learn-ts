/**
 * 타입 별칭
 *
 */

interface PersoneProps {
  name: string;
  age: number;
}
type Person = {
  name: string;
  age: number;
};
// 명시성은 약하나 호환성이 강함
// var seho: PersoneProps = { name: '세호', age: 30 };

// type 같은 경우에는 명시성이 강함
let seho: Person = {
  name: '',
  age: 0,
};

type MyString = string;
// 타입 같은 경우에는 자유도가 높아서 별칭이 가능함
var str: MyString = 'hello';

type Todo = { id: string; tittle: string; done: boolean };

function getTodo(todo: Todo) {
  return todo;
}
