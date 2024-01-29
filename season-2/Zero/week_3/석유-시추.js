/*
해설

각 열마다 최대 얼마나 뽑을 수 있는지 접근한다.

연결되어 있는 부분의 경우 1을 true로 바꾸면서 진입한다.

풀이

1. (for) 각 열마다 접근을 한다.
2. (bfs) 만약 방문을 하지 못하거나 이전에 방문을 한 적이 있다면 0을 리턴한다.
3. (bfs) 만약 방문을 한 적이 없다면 cnt(count)를 1로 설정하고 상하좌우 모두 접근을 한다.
4. (bfs) 만약 방문이 가능한 곳이라면 + 1을 더해준다.
5. 열마다 접근을 한 숫자들을 더해 비교를 통해 answer의 값을 바꿔준다.
*/


function solution(land) {
    var answer = 0;
    let row = land.length;
    let col = land[0].length;
    let dx = [0, 0, 1, -1];
    let dy = [1, -1, 0, 0];

    function bfs(cx, cy, arr) {
        if (cx < 0 || cx >= col || cy < 0 || cy >= row || arr[cy][cx] === 0 || arr[cy][cx] === true) {
            return 0;
        }

        arr[cy][cx] = true;

        let cnt = 1;

        for (let i = 0; i < dx.length; i++) {
                cnt += bfs(cx + dx[i], cy + dy[i], arr);
        }

        return cnt;
    }

    for (let j = 0; j < col; j++) {
        let count = 0;
        let visisted = [...land.map((val) => [...val])];
        for (let i = 0; i < row; i++) {
            const result = bfs(j, i, visisted);
            count += result;
        }
        answer = Math.max(count, answer);
    }

    return answer;
}

// function solution(land) {
//     let row = land.length;
//     let col = land[0].length;
//     let dx = [0, 0, 1, -1];
//     let dy = [1, -1, 0, 0];
//     let visited = Array.from({length: row}, () => Array(col).fill(false));
//     let total = Array(col).fill(0);

//     function dfs(x, y) {
//         if (x < 0 ||  x >= row || y < 0 || y >= col || visited[x][y] || !land[x][y]) {
//             return 0;
//         }

//         visited[x][y] = true;

//         let cnt = 1;

//         for (let i = 0; i < 4; i++) {
//             cnt += dfs(x + dx[i], y + dy[i]);
//         }

//         return cnt;
//     }

//     for (let j = 0; j < col; j++) {
//         for (let i = 0; i < row; i++) {
//             if (!visited[i][j] && land[i][j]) {
//                 total[j] += dfs(i, j);
//             }
//         }
//         visited = visited.map(row => row.fill(false));
//     }

//     return Math.max(...total);
// }

console.log(
    solution([
        [0, 0, 0, 1, 1, 1, 0, 0],
        [0, 0, 0, 0, 1, 1, 0, 0],
        [1, 1, 0, 0, 0, 1, 1, 0],
        [1, 1, 1, 0, 0, 0, 0, 0],
        [1, 1, 1, 0, 0, 0, 1, 1],
    ])
);
