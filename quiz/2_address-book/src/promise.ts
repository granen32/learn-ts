// function getItems(): Promise<unknown> 처음 추론할 때는 unknown이 추리됨-> 하지만 프로미스를 반환해주면됨
function getItems(): Promise<string[]> {
  let array = ["a", "b", "c"];
  return new Promise((resolve) => {
    resolve(array);
  });
}
