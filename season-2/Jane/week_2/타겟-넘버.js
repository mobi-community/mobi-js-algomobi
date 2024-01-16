/*
@ 풀이 방법 생각하기
[dfs] 재귀함수 사용하기
- 경우의 수를 나타내는 변수인 answer를 생성한다.
- 재귀함수는 각 턴의 합계와 시작 노드를 인자로 받는다.
- 시작 노드의 값이 numbers의 길이와 같아질 경우 합계를 나타내는 변수가 target과 같은지 검사한다. > 일치할 경우 answer + 1
- 합계값에 새로운 합을 넣고 시작 노드를 +1로 설정한 다음 재귀로 함수를 호출한다. (빼주는 경우도 동일하게 진행한다.)
*/

// dfs (0.20 ~ 16.81)
function solution(numbers, target) {
  let answer = 0;
  /*
    - sum: 탐색 단계에서의 누적 합계
    - start: 현재 탐색하고 있는 배열의 인덱스
    > 모든 경우의 수를 탐색하면서 목표값과 일치하는 경우의 수에 대한 탐색을 진행한다.
  */
  const dfs = (sum, start = 0) => {
    // 재귀 호출이 모든 인덱스를 탐색하며 누적 합계가 목표값과 일치하는지 확인한다.
    if (start === numbers.length) {
      if (sum === target) answer++; // 일치하는 경우 answer 증가!
      return;
    }
    // 현재 인덱스의 숫자를 더하거나 빼서 누적 합계를 갱신할 수 있도록 재귀적으로 호출된다.
    dfs(sum + numbers[start], start + 1);
    dfs(sum - numbers[start], start + 1);
  };

  // 모든 경우의 수를 확인하기 위해 두 개의 경우의 수에서 시작한다.
  dfs(numbers[0], 1); // 첫 번째 숫자를 더한 경우
  dfs(-1 * numbers[0], 1); // 첫 번째 숫자를 뺀 경우

  return answer;
}

// bfs (정답은 도출되나 두 개의 테스트 케이스에서 시간 초과 에러 발생)
// 현재까지의 위치와 합을 나타내는 Node 클래스
class Node {
  constructor(position, sum) {
    this.position = position;
    this.sum = sum;
  }
}

function solution(numbers, target) {
  // bfs 함수에 대한 호출 결과값을 반환한다.
  return bfs(numbers, target);
}

function bfs(numbers, target) {
  const visited = [];
  // 방문 노드 기록 큐에 첫 번째 값을 더했을 경우와 뺐을 경우를 담는다.
  visited.push(new Node(0, numbers[0]));
  visited.push(new Node(0, numbers[0] * -1));

  let answer = 0;

  // 방문 노드 기록의 길이가 존재할 때까지 큐를 순회하며 각각의 노드에서 가능한 다음 단계를 탐색한다.
  while (visited.length > 0) {
    // 방문 노드 기록에서 가장 최근 기록을 추출한다.
    const curNode = visited.shift();

    // 현재 위치가 배열의 마지막에 도달했는지 확인한다.
    if (curNode.position === numbers.length - 1) {
      // 배열의 마지막에 도달한 경우 합이 target 값과 일치하는지 확인한다.
      if (curNode.sum === target) {
        // 일치한다면 정답 + 1
        answer++;
      }
      continue;
    }

    const nPosition = curNode.position + 1;
    // 다음 위치가 배열의 길이를 넘을 경우 해당 노드 탐색을 중단한다.
    if (nPosition >= numbers.length) {
      continue;
    }
    // 도달하지 않았다면 현재 숫자를 더하는 경우와 현재 숫자를 빼는 경우를 방문 기록 큐에 추가한다.
    visited.push(new Node(nPosition, curNode.sum + numbers[nPosition]));
    visited.push(new Node(nPosition, curNode.sum + numbers[nPosition] * -1));
  }

  return answer;
}

/*
@ 풀이하고 나서,,

개인적으로 dfs와 bfs의 차이를 아직 잘 이해하지 못했다고 생각해서 두 방식으로 모두 구현을 시도해보았다.
아직 혼자서 전체를 구현하기에 어려움이 있어서 개념을 제대로 정리할 필요가 있을 것 같다.
개인적으로는 두 방식 다 가능하다면 재귀함수보다 큐를 사용하여 푸는 것을 선호하는데
이 문제는 dfs 즉 재귀함수 방식으로 구현하는 것이 적합했던 것 같다.
스스로 재귀함수를 처음부터 끝까지 구현할 수 있도록 연습해보자..!
*/
