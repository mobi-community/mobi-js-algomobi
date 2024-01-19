/*
설계
가장 큰 수를 0으로 잡아둔다.

가장 큰 수가 n[i]보다 작을 경우 stack에 0을 넣는다.
또한 que에 n[i]을 넣는다.

만약 가장 큰 수보다 작은 값의 경우 que를 탐색한다.
만약 que의 앞부분보다 자기 값이 클 경우 본인과 가장 큰 사이의 있는 값들을 모두 제거한다.

ex [4, 3, 5, 6, 10] 7이 들어간 경우, [7, 10]

*/

function solution(numbers) {
    let maxNumber = 0;
    let stack = []
    let que = []

    let reverseQue = numbers.reverse();

    reverseQue.forEach(element => {
        if (element >= maxNumber) {
            maxNumber = element;
            que = [maxNumber];
            stack.push(-1)
        } else {
            que = que.filter(val => val > element)
            stack.push(que[0])
            que.unshift(element)
        }
    });
    return stack.reverse();
}

console.log(solution([9, 1, 5, 3, 6, 2]))