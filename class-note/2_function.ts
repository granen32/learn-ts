// 함수의 파라미터에 타입을 정의하는 방식
function sum(a: number, b: number): number {
  return a + b;
}
// 두개의 인자를 받는데 3개가
// sum(10, 20,30);
// 함수의 반환 값에 타입을 정의하는 방식
function add(): number {
  return 10;
}

// 함수의 옵셔널 파라미터
function log(a: string, b?: string) {
  return a + b;
}

/**
 * log("hello world")
 * log("hellos ts", new Person())
 */
// 필요에 따라서 인자를 넘길 수 있고 생략할 수 있는 것
log('hello world');
log('hello ts', 'abc');
