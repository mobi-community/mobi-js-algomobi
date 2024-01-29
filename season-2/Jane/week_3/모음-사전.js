/*
@ 풀이 방법 생각하기

- 'A, E, I, O, U' 만으로 구성된 단어들
- 몇 번째 단어일까? -> 생성할 수 있는 모든 단어들로 구성된 사전 배열을 만들고 word에 대해 인덱스 찾기
- bfs(완전탐색)을 위해 재귀함수를 사용하여 단어 사전을 생성한다. > 정렬하여 순서대로 놓이도록 만든다.
*/

function solution(word) {
  const v = ["A", "E", "I", "O", "U"];
  const d = [];

  const makeWord = (cnt, w) => {
    if (cnt > 5) return;

    d.push(w);

    for (let i = 0; i < v.length; i++) {
      makeWord(cnt + 1, w + v[i]);
    }
  };

  // v[0]부터 시작하고 shift()를 사용하지 않는 방식으로 구현하면 생성되는 d는 똑같은데 indexof에서 값을 찾지 못한다. 왜일까..?
  makeWord(0, "");
  d.sort().shift();

  return d.indexOf(word) + 1;
}
