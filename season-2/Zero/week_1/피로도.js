/*
문제.

완전탐색을 요구하는 문제, 순열과 조합이 예상이 된다.

문제 풀이를 눌렀을 때 효율성 검사가 없는 것으로 보았을 때 모든 경우의 수를 따지면 답이 나올 것 같다.
던전의 수가 8개면.. 40320의 경우의수만 생각하면 된다! :)

모든 던전을 순회하여 최대 값을 구한다.
0. 이전에 방문한 값을 초기 방문한 값으로 설정한다.
1. 모든 던전을 처음부터 시도해본다.
2. 만약 이미 간 경우 (null), 또는 현재 체력보다 필요 체력이 적은 경우 무시한다. (반복문을 종료한다.)
3. 접근한 항목에 대해서는 null로 변환한다.
4. 안가본 항목에 한해서 반복문을 또 다시 시도해본다.
5. 현재까지의 최대 방문수와 비교하여 갱신힌다.
*/

function dfs(k, dungeons, prev) {
    // 0
    let max = prev; 
    // 1 
    dungeons.forEach((v, i) => {
      const [req, use] = v;
      // 2
      if (!req || req > k) return max;
      const copy = [...dungeons].map((v) => [...v]);
      // 3
      copy[i] = [null, null];
      // 4, 5
      max = Math.max(max, dfs(k - use, copy, prev + 1));
    });
    return max;
}

function solution(k, dungeons) {
    return dfs(k, dungeons, 0);
}

const example = [
    80,
    [
        [80, 20],
        [50, 40],
        [30, 10],
    ],
];

console.log(solution(...example));
