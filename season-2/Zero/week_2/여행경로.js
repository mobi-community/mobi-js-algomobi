/*
설계
    dfs 설계
    1. 방문을 하지 않았다면 해당 문자로 시작하는 곳으로 방문을 합니다.
    2. 방문을 한 것을 표시를 합니다.
    3. 다음은 마지막으로 존재하는 경로중 방문하지 않은 곳을 방문합니다.

    프로그램 설계
    1. 처음 시작하는 공항이 ICN일 경우 실행
    1. (sort, localeCompare)2번째가 중요하기 때문에 알파벳 순으로 정렬을 해줍니다.
    2. (for)모든 경로를 돌아보며 진행합니다.
*/

function solution(input) {
    var answer = [];
    let visited = new Array(input.length).fill(false)

    function dfs(visited, tickets, node, first = false) {
        const copy = [...visited]
        const array = [...tickets]
        copy[node] = true

        if (!first) {
            array.push(input[node][1])
        }

        if (visited.length + 1 === array.length) {
            answer.push(array)
        }

        visited.forEach((val, idx) => {
            if (!val && array[array.length - 1] === input[idx][0]) dfs(copy, array, idx)
        })
    }

    input.forEach((val, idx) => {
        if (val[0] === "ICN") dfs(visited, val, idx, true)
    });

    answer.sort((a, b) => a.join().localeCompare(b.join()));

    return answer[0];
}

console.log(solution([["ICN", "SFO"], ["ICN", "ATL"], ["SFO", "ATL"], ["ATL", "ICN"], ["ATL", "SFO"]]))