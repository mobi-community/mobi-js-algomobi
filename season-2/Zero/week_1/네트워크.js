/*
설계
bfs 설계 접근방법을 통해 모든 경우의 수를 고려해본다.
이미 접근한 적이 있다면 넘어간다.

des 설계
1. 모든 곳을 방문하기 위해서 0으로 채워둔다.
2. 들어온 곳은 표시를 해준다.
3. 만약 현재 탐색중인 곳과 같은 인덱스를 가지고, 아직 탐색하지 않았을 경우 방문한다.

프로그램 설계
1. 만약 방문을 했을 경우 해당 반복은 돌지 않는다.
2. 방문한 적이 없을 경우 경우의 수가 추가 된다.
*/

function solution(n, computers) {
  // dfs

  // 1.
  const visited = new Array(n).fill(0);
  function dfs(visited, node) {
    // 2.
    visited[node] = 1;
    for (let i = 0; i < computers[node].length; i++) 
    {
      // 3.
      if (computers[node][i] === 1 && visited[i] === 0) {
        dfs(visited, i);
      }
    }
  }
  
  // 프로그램

  // 추가되는 경우의 수
  let count = 0;
  computers.forEach((_, i) => {
    // 1.
      if (visited[i] === 1) return;

      // 2.
      count += 1;
      dfs(visited, i);
  });

  return count;
}

const example = [
    3,
    [
        [1, 1, 0],
        [1, 1, 1],
        [0, 1, 1],
    ],
];

console.log(solution(...example));
