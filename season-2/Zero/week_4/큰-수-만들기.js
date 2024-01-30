/*
풀이 
작은 인덱스 번호를 선택해둔다.

1. stack을 구현한다.
2. stack에 들어온 마지막 값과 현재 비교중인 대상만 비교한다.
3. 비교중인 대상이 stack의 마지막 보다 클 경우 stack을 제거한다.
4. 만약 k가 없더라도 나머지를 stack에 넣는다.
5. 오름차순으로 들어간 경우 k만큼 제거가 안되었기 때문에 stack의 마지막만 제거해준다.
*/


function solution(number, k) {
    const stack = [];

    for (let i = 0; i < number.length; i++) {
        const currentDigit = number[i];
        // 삭제해야할 값이 남아있고 stack의 마지막이 currentDigit 보다 작을 경우 stack 을 pop한다.
        // 마지막 값이 최근 값보다 크거나 같은 경우는 보류한다.
        while (k > 0 && stack.length > 0 && stack[stack.length - 1] < currentDigit) {
            // 스택을 제거하고 k를 줄인다.
            stack.pop();
            k--;
        }
        // stack의 최근 값을 넣는다.
        stack.push(currentDigit);
    }

    // 모든 배열을 순해하였는데도 k가 남아있다면 stack을 통해 제거한다. => 오름차순으로 되어있을 경우 제거가 안되었다.
    while (k > 0) {
        stack.pop();
        k--;
    }

    return stack.join('');
}

console.log(solution("987654321", 4))
