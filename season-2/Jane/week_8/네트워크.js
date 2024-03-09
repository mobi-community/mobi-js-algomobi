/*
@ 풀이 방법 생각하기
1. 방문 여부를 나타내는 배열을 생성한다. (n만큼의 길이를 가져야 한다.)
2. dfs를 구현할 수 있는 재귀함수를 생성한다.
    - (전체 그래프 배열, 방문 노드 위치, 방문 기록 배열)을 받아야 한다.
    - 함수가 시작할 때 방문 기록 배열[방문 노드 위치]를 true로 설정해준다.
    - 내부에서 전체 그래프 배열 길이만큼의 for문을 돌린다.
    - 만약 방문하지 않은 노드(방문 기록 배열을 인덱싱한 값이 false)이면서 연결된 노드이면(전체그래프배열[방문노드위치][현위치] === 1)
      다시 재귀 함수를 호출한다. (전체 그래프 배열, 현위치, 방문기록배열)
3. solution 함수 내에서 n만큼 순환하는 for문을 돌린다.
4. 만약 방문하지 않은 노드라면 i가 방문 노드 위치가 되도록 dfs를 호출한다. -> 호출이 끝나면 answer++
5. answer을 반환한다.
*/

const dfs = (connection, position, visited) => {
  visited[position] = true;
  for (let node = 0; node < connection.length; node++) {
    if (connection[position][node] && !visited[node])
      dfs(connection, node, visited);
  }
};

const solution = (n, computers) => {
  let network = 0;
  const visited = [];

  for (let pos = 0; pos < n; pos++) {
    if (!visited[pos]) {
      dfs(computers, pos, visited);
      network++;
    }
  }

  return network;
};
