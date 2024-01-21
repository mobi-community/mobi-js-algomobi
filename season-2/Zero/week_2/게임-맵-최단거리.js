/*
설계
dfs
1. 방문한 곳과, 현재 위치, 카운트를 전달받습니다.
2. 만약 도달한 곳이 마지막 곳이라면 진행을 멈춥니다.
3. 더 이상 갈 곳이 없다면 반복을 멈춥니다.

구현
1. 시작 포지션은 1,1 (0,0)에서 시작합니다.
2. 이동 가능한 모든 경로를 탐색합니다.
    2-1. 만약 위가 가능하다면 [n - 1][m]
    2-2. 만약 아래가 가능하다면 [n + 1][m]
    2-3. 만약 왼쪽이 가능하다면 [n][m + 1]
    2-4. 만약 위가 가능하다면 [n][m - 1]
3. 중단 포인트
    3-1. count가 maxCount보다 작을시에 멈춘다.


문제점
효울성에서 다 틀린다. 즉 bfs로 구현을 시도한다.
*/

// function solution(maps) {
//     let maxCount = -1;
//     function dfs(visited, position, count) {
//         if (maxCount !== -1 && maxCount <= count) {
//             console.log(visited)
//             return;
//         }

//         const copy = JSON.parse(JSON.stringify(visited));

//         if (position[0] === visited[0].length - 1 && position[1] === visited[1].length - 1) {
//             maxCount = count;
//         }

//         copy[position[0]][position[1]] = 0;

//         if (position[0] + 1 < copy[0].length && copy[position[0] + 1][position[1]] === 1) {
//             dfs(copy, [position[0] + 1, position[1]], count + 1);
//         }
//         if (position[1] + 1 < copy[0].length && copy[position[0]][position[1] + 1] === 1) {
//             dfs(copy, [position[0], position[1] + 1], count + 1);
//         }
//         if (position[0] - 1 >= 0 && copy[position[0] - 1][position[1]] === 1) {
//             dfs(copy, [position[0] - 1, position[1]], count + 1);
//         }
//         if (position[1] - 1 >= 0 && copy[position[0]][position[1] - 1] === 1) {
//             dfs(copy, [position[0], position[1] - 1], count + 1);
//         }

//         return
//     }

//     dfs(maps, [0, 0], 1);

//     return maxCount === -1 ? -1 : maxCount;
// }

/*
설계
bfs

큐에서 원소를 하나 꺼냅니다.
꺼낸 원소와 인접한 방문하지 않은 위치를 큐에 넣고 방문 처리합니다.
목표 지점에 도달하면 탐색을 종료하고 최단 거리를 반환합니다.
*/

function solution(maps) {
    const queue = [];
    const dx = [1, 0, -1, 0];
    const dy = [0, 1, 0, -1];
    const n = maps.length;
    const m = maps[0].length;

    queue.push([0, 0, 1]);
    maps[0][0] = 0;

    while (queue.length) {
        const [x, y, count] = queue.shift();

        if (x === n - 1 && y === m - 1) {
            return count;
        }

        for (let i = 0; i < 4; i++) {
            const nx = x + dx[i];
            const ny = y + dy[i];
      
            if (nx >= 0 && nx < n && ny >= 0 && ny < m) {
              if (maps[nx][ny] === 1) {
                queue.push([nx, ny, count + 1]);
                maps[nx][ny] = 0; 
              }
            }
          }
    }

    return -1;
}

console.log(
    solution([
        [1, 0, 1, 1, 1],
        [1, 0, 1, 0, 1],
        [1, 0, 1, 1, 1],
        [1, 1, 1, 0, 1],
        [0, 0, 0, 0, 1],
        [0, 0, 0, 0, 1],
    ])
);
