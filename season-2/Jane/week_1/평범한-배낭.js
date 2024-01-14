/*
@ 풀이 방법 생각하기

- 매개변수 N(물건의 개수), W(각 물건의 무게), V(각 물건의 가치), K(가방의 무게 제한)

1. 각 물건을 가치의 크기 순으로 정렬한다. (내림차순)
2. 0번 물건부터 하나씩 for문을 사용하여 기준점으로 두고, 뒤의 물건들을 무게 제한에 걸리기 전까지 sum에 더한다.
3. 해당 값을 result에 담고 1번 물건부터 해당 과정을 반복해 Math.max로 최댓값으로 교체한다.

==========================================================================================================

동적 계획법으로 풀어보기
1. 무게 배열과 가치 배열을 따로 생성한다.
2. 냅색 알고리즘을 적용한다.
  - N의 길이만큼 0으로 채워진 빈 배열을 생성한다.
  - N만큼 for문을 반복한다.
  - 그 내부에서 K만큼의 for문을 반복하고 최대 무게보다 커지면 멈추도록 한다. (현재 배낭의 무게)
  - 현재 물건의 무게가 배낭의 무게보다 작거나 같다면 현재 물건을 선택하는 경우와 선택하지 않는 경우 중 최댓값을 선택한다.
  - 현재 물건의 무게가 배낭의 무게보다 크다면 선택하지 않는다.
  - 최대 가치를 반환한다.
*/

// let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().split('\n')
const input = ["4 7", "6 13", "4 8", "3 6", "5 12"];

const [N, K] = input[0].split(" ").map(Number);
const w_arr = [];
const v_arr = [];

for (let i = 1; i < input.length; i++) {
  const [w, v] = input[i].split(" ").map(Number);
  w_arr.push(w);
  v_arr.push(v);
}

const makeBasicArray = (len) => Array.from({ length: len }, () => 0);

const knapsack = (N, K, w_arr, v_arr) => {
  const dy = makeBasicArray(N + 1).map(() => makeBasicArray(K + 1));

  for (let i = 1; i <= N; i++) {
    const tw = w_arr[i - 1];
    const tv = v_arr[i - 1];

    for (let j = 1; j <= K; j++) {
      if (j - tw >= 0) {
        dy[i][j] = Math.max(dy[i - 1][j], dy[i - 1][j - tw] + tv);
      } else {
        dy[i][j] = dy[i - 1][j];
      }
    }
  }

  return dy[N][K];
};

console.log(knapsack(N, K, w_arr, v_arr));

/*
@ 풀이하고 나서,,

처음 생각한 풀이에서 계속 틀리는데 원인을 제대로 파악하지 못해서
결국 해당 문제에 어떤 알고리즘을 적용해야 하는지 찾아본 뒤 풀이 방법을 수정하여 해결하였다.
동적 계획법 중 냅색 알고리즘이 필요한 문제였는데 아직 완벽하게 이해한 것은 아니라
추가적인 정리가 필요할 것 같다.
*/

// @ 틀린 풀이 (어떤 부분에서 에러가 발생하는지는 잘 모르겠다.)
// let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().split('\n')
// const input = ["4 7", "6 13", "4 8", "3 6", "5 12"];
// const input = ["4 7", "8 13", "6 8", "5 6", "9 12"];
// const input = ["4 7", "2 5", "4 8", "3 6", "5 12"];

// const K = +input[0].split(" ")[1];
// const stuffList = input
//   .slice(1)
//   .map((stuff) => stuff.split(" ").map((value) => +value));
// stuffList.sort(([w1, v1], [w2, v2]) => v2 - v1);
// console.log("s", stuffList);
// let result = 0;

// for (let i = 0; i < stuffList.length; i++) {
//   let [W_Sum, V_Sum] = stuffList[i];
//   if (W_Sum > K) continue;

//   for (let j = i + 1; j < stuffList.length; j++) {
//     const [tw, tv] = stuffList[j];
//     if (W_Sum + tw > K) continue;
//     V_Sum += tv;
//     W_Sum += tw;
//   }
//   result = Math.max(V_Sum, result);
// }

// console.log(result);

// console.log(solution(input));
