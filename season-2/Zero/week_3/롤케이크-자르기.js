/*
    해설

    먹을 수 있는 총 경우의 수를 구하고

    수를 나눴을 때 경우의 수의 전발일 경우 혹은 동일할 경우를 확인해야한다.

    100만. 유효성 검사, 있을듯

1. (for) 배열의 길이 - 1 만큼 반복 (하나정도는 가지고 있어야 하니까.)
2. (Set.add) 해당번째의 가지고 있는 종류를 구한다.
3. (Array.push) 해당 번째 순차에 가지고 있는 종류를 배열에 삽입.
4. (Array.reverse) 뒤에서 부터 경우의수를 구하는 경우 해당 순서를 뒤집어줘서 비교해야하므로 reverse를 해준다.
5. (for) 배열의 길이만큼 반복을 통해 값이 일치하는 경우 count의 값을 일치시켜준다.
6. (return) count의 값을 리턴해준다.

*/

function solution(topping) {
    let count = 0
    let left = [];
    let right = [];
    const reTopping = [...topping].reverse()
    let leftTemp = new Set();
    let rightTemp = new Set();
    for (let i = 0; i < topping.length - 1; i++) {
        leftTemp.add(topping[i])
        rightTemp.add(reTopping[i])
        left.push(leftTemp.size)
        right.push(rightTemp.size)
    }

    right.reverse();

    for (let i = 0; i < right.length; i++) {
        if (left[i] === right[i]) {
            count++;
        }
    }

    return count
}

console.log(solution([1, 2, 1, 3, 1, 4, 1, 2]))