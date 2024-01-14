// eunm이란~?
/**
 * 이넘은 특정 값들의 집합을 의미하는 자료형입니다. 예를 들면 아래와 같은 목록이 이넘이 될 수 있습니다.
 */

enum shoes {
  nike,
  // enum의 값을 초기화를 안하면 기본적으로 0이 들어가고 그 이후에 1씩 증가한다.
  adidas,
  pose,
}

let myShoes = shoes.nike;
// 자동적으로 1-> 2-> 3 -> 이런 식으로 값이 증가함

// 문자형 enum

enum stringShoes {
  nike = "nike",
  // enum의 값을 초기화를 안하면 기본적으로 0이 들어가고 그 이후에 1씩 증가한다.
  adidas = "adidas",
  pose = "pose",
}

let stringMyShoes = stringShoes.nike;
// 이거는 스트링값 nike
