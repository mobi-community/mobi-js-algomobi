/*
설계

dfs

1. 단어와 방문기록, 현재 번호, 현재 상태, 목표 문구를 입력을 받습니다.
2. 만약 현재 상태와 목표 문구가 일치하다면 1을 리턴합니다.
3. 만약 변경할 문구가 없다면 0을 리턴합니다.
4. 변경 가능한 문구를 찾는 것은 반복문을 통해서 생각해본다.

=> 최소 값을 찾는 문제이기 때문에 answer를 Infinity로 설정합니다.

프로그램

1. 모든 (시작)경우의 수를 조사를 해보아야하기 때문에 모든 경우의 수로 시작을 해봅니다.
*/


function checkOneString(a, b) {
    let dif = 0;
    for (let index = 0; index < a.length; index++) {
        const charA = a[index];
        const charB = b[index];
        if (charA !== charB) {
            dif++;
            if (dif === 2) {
                return false;
            }
        }
    }

    return dif === 1;
}

function solution(begin, target, words) {
    var answer = Infinity;
    const visited = new Array(words.length).fill(false);

    function dfs(visited, node, state) {
        let copy = [...visited];

        // 같으면 리턴
        if (state === target) {
            answer = Math.min(visited.filter(val=> val ===true).length,answer)
        }

        if(!visited.findIndex(val => val === false) === -1) answer = 0;

        // 온거 표시함
        copy[node] = true;

        words.forEach((val, ind) => {
            if (!copy[ind] && checkOneString(state, val)) {
                // 하나만 다를 경우 들어간다.
                dfs(copy, ind, val);
            }
        });
    }

    words.forEach((_, node) => {
        dfs(visited, node, begin, target);
    });

    return Number.isFinite(answer) ? answer : 0;
}

console.log(solution(...['hit', 'cog', ['hot', 'dot', 'dog', 'lot', 'log', 'cog']]));
