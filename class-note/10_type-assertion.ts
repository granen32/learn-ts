// 타입 단언
let a;
a = 20;
a = 'a';
// as 를 넣게 되면 이 타입은 설정한 타입을 정의하게됨
let b = a as string;

//  DOM API 조작
/**
 * document에 접근 할 수 있는 api
 */
// <div id="app">h1</div>;
let appDiv = document.querySelector('#app') as HTMLDivElement;
appDiv.innerHTML = 'hi';
