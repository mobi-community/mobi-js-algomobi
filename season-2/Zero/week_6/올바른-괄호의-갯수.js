/*
해설
올바른 괄호의 갯수를 구하기 위해서 시작은 괄호가 열린 상태로 시작합니다.

또한 올바른 괄호를 이루기 위해서는 닫힌 괄호의 갯수가 열린 괄호의 갯수보다 적어야 합니다.

올바른 괄호의 갯수를 구하기 위해선 열린 괄호의 갯수만이 중요하므로 ex => 3개 ((())), (()()), 전부 괄호가 3개 나온순간부터 완성
open의 길이만을 감시를 합니다. close의 갯수는 어차피 open의 갯수를 따라가기 때문.

풀이
1. 시작은 하나가 열린 상태로 시작하기 때문에 dfs(1, 0)으로 시작을 합니다.
2. 열린 갯수가 n과 같은지 확인합니다. 일치하다면 1을 반환합니다.
3. 닫힌 갯수가 열린 갯수보다 많다면 0을 반환합니다.
4. 각 dfs 마다 열린 경우와 닫힌 경우로 접근을 합니다.
*/

function solution(n) {
    var answer = 0;

    function dfs(open, close) {
        if (open === n) {
            return 1
        }

        if (close > open) {
            return 0
        }

        let number = 0;
        number += dfs(open + 1, close);
        number += dfs(open, close + 1);
        return number
    }

    answer = dfs(1, 0)

    return answer;
}

console.log(solution(3))