/*
@ 풀이 방법 생각하기
1. (인덱스+1)로 채워진 길이가 n인 배열을 생성한다.
2. section이 해당 값을 포함하면 그 부분은 칠해지지 않은 벽이므로 포함여부를 통해 true/false로 변환한다.
3. section에 for문을 돌려서 false인 부분이 true가 되도록 해주고 해당 횟수를 세어 반환한다.
    - 이때 이미 true라면 지나간다.
    - false라면 m만큼을 true로 바꿔준다.
*/

function solution(n, m, section) {
  let answer = 0;
  if (m === 1) return section.length;
  const wall = Array.from({ length: n }, (_, i) => i + 1).map(
    (block) => !section.includes(block)
  );

  for (let i = 0; i < section.length; i++) {
    const block = section[i];
    if (wall[block - 1]) continue;
    for (let j = 0; j < m; j++) wall[block - 1 + j] = true;
    answer++;
  }

  return answer;
}
