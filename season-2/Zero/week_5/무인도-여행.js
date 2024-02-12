/*
풀이
dfs를 통해 구현을 진행합니다.

1. 모든 x, y 지점에서 방문을 시도합니다.
2. 방문을 할 경우 Set에다가 기록을 해줍니다.
3. 만약 방문한 적이 있거나 X의 경우 혹은 범위를 벗어났을 경우 dfs를 종료해줍니다.
4. 만약 방문한 적이 없을 경우 근처 상, 하, 좌, 우 노드를 탐색해줍니다.
5. 탐색 가능한 최종 넓이를 리턴받습니다.
6. 0을 제외한 탐색 길이의 결과를 리턴받습니다.
7. 만약 길이가 0의 배열을 리턴받을 경우 [-1]을 리턴합니다.
8. 해당 배열을 오름차 순으로 정렬을 합니다.
*/

function solution(maps) {
    var answer = [];
    const rowLength = maps.length;
    const colLength = maps[0].length;
    const dx = [1, -1, 0, 0];
    const dy = [0, 0, 1, -1];
    const visited = new Set();

    function dfs(row, col) {
        if (
            col === -1 ||
            row === -1 ||
            col >= colLength ||
            row >= rowLength ||
            maps[row][col] === 'X' ||
            visited.has(`${row} ${col}`)
        )
            return 0;

        visited.add(`${row} ${col}`);

        let sum = Number(maps[row][col]);

        for (let i = 0; i < dx.length; i++) {
            sum += dfs(row + dx[i], col + dy[i]);
        }
        return sum;
    }

    for (let i = 0; i < rowLength; i++) {
        for (let j = 0; j < colLength; j++) {
            const result = dfs(i, j);
            if (result !== 0) {
                answer.push(result);
            }
        }
    }

    if (answer.length === 0) return [-1];

    return answer.sort((a, b) => a - b);
}

console.log(solution(['X591X', 'X1X5X', 'X231X', '1XXX1']));
