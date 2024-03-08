/*
@ 풀이 방법 생각하기
1. true가 담긴 getIncentive 배열을 만든다.
2. some을 사용하여 배열 중 두 값이 다 해당 인덱스의 값보다 높은 경우가 있다면 false로 만든다.
3. 만약 getIncentive[0]이 false라면 -1을 반환한다.
4. 아니라면 두 점수의 합의 순서를 구한다. 
5. 합의 배열의 0번째 값을 담아둔 뒤 완호보다 점수가 높은 사람들만 남기도록 filter한다.
6. 그 배열의 길이 + 1이 완호의 순위

some을 사용했더니 계속 효율성에서 오류가 발생했다. 
또한 전체 배열에 대해 인센티브 여부를 검사해서 시간이 더 오래 걸렸던 것 같다.
some 대신 일반 for문을 사용하도록 수정하고 함수를 추상화 할 때 배열을 따로 받도록 하여 
sum이 낮은 사원들은 아예 제외할 수 있도록 하였더니 효율성을 통과할 수 있었다.
*/

const isHigherScore = (a, r, idx, arr) => {
  for (let i = 0; i < arr.length; i++) {
    const [attitude, review] = arr[i];
    if (idx === i) continue;
    if (attitude > a && review > r) return true;
  }
  return false;
};

function solution(scores) {
  const [wanho_attitude, wanho_review] = scores[0];

  // 만약 완호가 인센티브를 받지 못하면
  if (isHigherScore(wanho_attitude, wanho_review, 0, scores)) return -1;

  // 완호의 순위 구하기
  const Wanho = wanho_attitude + wanho_review;
  const sum = scores.filter(([a, r]) => a + r > Wanho);
  const ranking = sum.filter(([a, r], i) => !isHigherScore(a, r, i, sum));

  return ranking.length + 1;
}
