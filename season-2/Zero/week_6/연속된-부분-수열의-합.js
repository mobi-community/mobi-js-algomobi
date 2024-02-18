/*
풀이

to point 방식으로 풀이를 진행한다.

1. (forEach) sequence[0] ~ sequence[n-1] 까지의 합을 구한다.
2. 범위내의 합은 다음과 같다. temp[i] - temp[j]
3. 값은 비내림차인 연속된 수열이기 때문에 left와 right로 구분한다.
4. (else if) 만약 값이 크다면 범위를 줄이고 값이 부족하다면 범위를 늘린다.
5. 만약 값이 k와 일치한다면 또 prevPoint보다 값이 작다면 갱신해준다.
6. 최소 길이를 반환한다. 
*/

function solution(sequence, k) {
    var answer = [];
    let temp = [0];
    //   0, 1, 2, 3, 5, 8, 12, 17
    let prevPoint = Infinity;
    sequence.forEach((num, i) => {
        temp.push(num + temp[i]);
    });

    let left = 0;
    let right = 0;

    console.log(temp)

    while (left <= right) {
        let sum = temp[right] - temp[left];
        if (sum === k) {
            let point = right - 1 - left;
            if (prevPoint > point) {
                answer = [left, right - 1];
                prevPoint = point;
            }
        }

        sum < k ? right++ : left++;
    }
    return answer;
}

console.log(solution([1, 1, 1, 2, 3, 4, 5], 5));
