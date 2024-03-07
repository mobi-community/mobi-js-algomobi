/*
풀이

기존에는 부서지는 k번째 디딤돌이 있는 위치의 인덱스를 구하였습니다.
하지만 문제내용은 k번째 디딤돌이 있는 위치의 인덱스가 아닌 몇명이 넘어갈 수 있는지를 판단하는 문제였습니다.

다음과 같이 이분 탐색을 이용하여 풀이합니다.

1.중간점(mid)을 찾습니다. 배열의 시작점(start)과 끝점(end)을 이용하여 계산합니다.
2.중간점의 값과 찾고자 하는 값을 비교합니다.
    찾고자 하는 값이 중간점보다 작은 경우, 끝점을 중간점 앞으로 옮겨줍니다.
    찾고자 하는 값이 중간점보다 큰 경우, 시작점을 중간점 뒤로 옮겨줍니다.
3.시작점과 끝점이 교차할 때까지 첫 번째와 두 번째 단계를 반복합니다.
4.can_cross 함수는 현재 mid 값으로 징검다리를 건널 수 있는지의 여부를 판단합니다.
5.이분 탐색을 이용하여 건널 수 있는 최대 인원 수를 찾습니다.

*/

// function solution(stones, k) {
//     let temp = 0;
//     let number = -1;
//     const array = new Map();

//     for (let i = stones.length - 1; i >= 0; i--) {
//         if (number >= stones[i]) {
//             number = stones[i];
//             temp = 1;
//             array.set(temp, i);
//         } else {
//             number = stones[i];
//             temp++;
//             array.set(temp, i);
//         }
//     }

//     let max = Math.max(...array.keys());

//     while (!array.has(k) && k > max) {
//         k--;
//     }

//     return array.get(k);
// }

function can_cross(stones, k, mid) {
    let zero_count = 0;

    for (let stone of stones) {
        if (stone - mid <= 0) {
            zero_count += 1;
            if (zero_count >= k) return false;
        } else {
            zero_count = 0;
        }
    }
    return true;
}

function solution(stones, k) {
    let left = 1;
    let right = 200000000;
    let answer = 0;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);

        if (can_cross(stones, k, mid)) {
            answer = mid;
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return answer + 1;
}
