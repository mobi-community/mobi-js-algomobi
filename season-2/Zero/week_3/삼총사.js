/*
해설
모든 숫자를 정해진 3만큼 반복한다.

숫자가 0과 일치하면 삼총사이므로 answer을 1 더한다.

1. 모든 숫자를 반복한다.
2. visited를 통해 이미 접근한 경우 들어가지 않는다.
3. 만약 3번 방문을 하였을 때 0이라면 answer를 더한다.
*/

function solution(number) {
    var answer = new Set();
    const visited = new Array(number.length).fill(true)
    function bfs(visited, node, count, sum) {
        const copy = [...visited]
        copy[node] = false
        sum += number[node]
        if (count === 3) {
            if (sum === 0) {
                answer.add(copy.toString())
            }
            return;
        }

        copy.forEach((v, node) => {
            if (v) {
                bfs(copy, node, count + 1, sum)
            }
        })
    }

    number.forEach((_, node) => {
        bfs(visited, node, 1, 0)
    });
    return answer.size;
}

console.log(solution([-2, 3, 0, 2, -5]))