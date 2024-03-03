/*
@ 풀이 방법 생각하기
- 왼쪽으로 쭉 내려왔을 때(7/3/8/2/4)와 오른쪽으로 쭉 내려왔을 때(7/8/0/4/5) 사이의 모든 겯우의 합을 구한다.
1. 0번째 숫자들만 더한 값을 구해 해당 값을 Max로 둔다.
2. 맨 마지막 층에서 시작하는 for문을 돌린다. 해당 칸에서 가능한 두 범위 중 합이 더 큰 쪽을 찾아 나간다.
    (만약 해당 값이 0번째 칸에 위치한다면 위 층에서도 0번째 칸만 가능함에 주의하기)
    - bigger 값을 구해서 sum에 더한다.
    - pointer가 0이었다면 bigger은 무조건 triangle[j][pointer]
    - pointer가 triangle[j].length와 같다면 bigger은 무조건 triangle[j][pointer]
    - 그 외의 경우 triangle[j][pointer]와 triangle[j][pointer+1]를 비교하여 구한다.
    - 층이 바뀔 때 pointer를 바꿔주어야 한다.
    - pointer가 0이었다면 다음 pointer도 0이 된다.
    - 그 외의 경우 다음 pointer는 pointer - 1이 된다.
3. 끝까지 더한 뒤 Max 값보다 크다면 해당 값을 Max에 할당한다.
> 이 방식을 사용할 경우 코드 가독성이 떨어지고 제대로 된 값이 도출되지 않는다.

1. 맨 아래 층부터 시작하여 각 위치까지의 최대 합을 계싼한다.
    - 반복문을 맨 아래 층을 제외한 아랫 부분부터 시작하여 --로 맨 꼭대기 층까지 올라온다.
2. 현재 층의 길이만큼 for문을 돌린다.
    - 이때 아래 층에서 더할 수 있는 두 숫자 중 더 큰 숫자를 선택하여 현재 위치의 값과 더해준다.
    - 별도로 변수를 생성하지 않고 해당 그래프 자리에 그대로 해당 값을 더한다.
3. 마지막 [0][0]에 담기는 값을 반환해준다.
*/

function solution(triangle) {
  const h = triangle.length;

  for (let level = h - 2; level >= 0; level--) {
    for (let i = 0; i <= level; i++) {
      triangle[level][i] += Math.max(
        triangle[level + 1][i],
        triangle[level + 1][i + 1]
      );
    }
  }

  return triangle[0][0];
}
