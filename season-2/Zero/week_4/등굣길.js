/*
해설
1. 지도의 크기만큼 dp라는 배열을 생성합니다. 
2. 각 지도의 웅덩이는 -1로 값을 변경합니다.
3. 올 수 있는 경우의수를 현재 값에 더 합니다.
4. 마지막 도착지점에서의 경우의 수를 반환합니다.~

풀이
1. (Array.from) 배열을 만듭니다.
2. 웅덩이의 경우 -1로 변경합니다.
3. 뒤로가진 않으니 위에서 오는 경우와 왼쪽에서 오는 경우만 확인합니다.
4. 값이 커질 수 있으니 MOD를 통해 나눠줍니다.
5. 최단 경로의 갯수를 반환합니다.
*/

function solution(m, n, puddles) {
    const dp = Array.from({ length: n }).map(() => new Array(m).fill(0));
    const MOD = 1000000007;

    puddles.forEach(([x, y]) => {
        dp[y - 1][x - 1] = -1;
    });

    dp[0][0] = 1;

    for (let row = 0; row < n; row++) {
        for (let col = 0; col < m; col++) {
            if (dp[row][col] === -1) {
                dp[row][col] = 0;
                continue;
            }

            if (row > 0) {
                dp[row][col] = (dp[row][col] + dp[row - 1][col]) % MOD;
            }

            if (col > 0) {
                dp[row][col] = (dp[row][col] + dp[row][col - 1]) % MOD;
            }
        }
    }

    return dp[n - 1][m - 1] % MOD;
}

console.log(solution(4, 3, [[2, 2]]))