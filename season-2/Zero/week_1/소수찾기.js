/*
설계

bfs (완전탐색)

중복된 값이 들어가면 안되니 상관없는 set에 넣는다.

1. (forEach) 모든 경우의 수 들어가본다.
2. 중복된 값은 재사용 할 수 없으니 방문 기록이 있는 visted 변수를 만든다.
3. 한번 들어간 곳은 탐색하지 않고 visted에 대한 정보가 없는 곳만 방문한다.
4. (add) 소수를 찾는 함수를 통해 해당 수가 소수일 경우 set에 넣는다.
*/

function decimalValidation(number) {
    let temp = true;
    for (let i = 2; i < number; i++) {
        if (number % i === 0) {
            temp = false;
            break;
        }
    }

    return number > 1 ? temp : false;
}

function solution(numbers) {
    const numberArr = numbers.split('');
    const dic = new Set();
    const visited = new Array(numbers.length).fill(false);

    function dfs(vistied, node, string) {
        const copy = [...vistied];
        copy[node] = true;

        if (decimalValidation(Number(string))) {
            dic.add(Number(string));
        }

        numberArr.forEach((char, index) => {
            if (copy[index] === false) dfs(copy, index, string + char);
        });
    }

    numberArr.forEach((char, index) => {
        dfs(visited, index, char);
    });

    return dic.size;
}

console.log(solution('011'));
