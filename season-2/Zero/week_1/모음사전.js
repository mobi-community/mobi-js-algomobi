/*
설계

bfs (완전탐색)
모든 순서를 전부 구하고 해당 문자가 몇번째 인덱스인지 판단하는 문제

5 * 5 * 5 * 5 * 5 = 3125가지의 경우의 수가 존재

1. (bfs, push) A, E, I, O, U 로 만들 수 있는 사전을 만든다.
2. (findIndex) 해당 인덱스가 몇번째 인덱스인지 확인후 인덱스 값을 반환한다.
3. 모든 경우의 수를 전부 확인하는 것으로 방문했는지는 판단하지 않아도 된다.
*/

const VOWEL = ["A", "E", "I", "O", "U"];

function solution(word) {
    const dic = [];

    function bfs(word, count) {
        if (count === 6) return;
        
        dic.push(word);

        VOWEL.forEach((val) => {
            bfs(word + val, count + 1);
        });
    }

    VOWEL.forEach((val) => {
        bfs(val, 1);
    });

    dic.sort();

    return dic.findIndex(val => val === word) + 1;
}

const word = 'AAAE';

console.log(solution(word));
