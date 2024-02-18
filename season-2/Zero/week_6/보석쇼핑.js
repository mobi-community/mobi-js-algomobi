/*
모든 종류의 보석을 하나씩 구매해야하는 이상한 취미가 있는 무지씨

무지씨를 위해서 모든 종류의 보석을 살 수 있는 최소 방법을 택해야합니다.

풀이
모든 최소길이를 탐색을 함으로써 찾아는 보석의 종류의 갯수와 찾아야할 보석의 종류의 갯수를 비교합니다.
1. (for) 찾을 수 있는 최소의 길이만큼 반복을 합니다.
2. (temp) 임시변수 temp를 사용하여 찾아낸 경우 false로 바꿔줌으로서 모든 반복문을 탈출합니다.

문제 => 불필요한 배열 생성이 많아졌습니다. 시간이 많이 듭니다.

풀이

투 포인터(two pointers) 알고리즘을 사용합니다.

이 코드는 start와 end 두 개의 포인터를 사용하여 보석 배열을 한 번만 스캔합니다.
보석의 모든 유형을 찾을 때까지 end 포인터를 증가시키고, 모든 유형을 찾으면 start 포인터를 증가시켜 범위를 줄입니다. 
이 과정을 반복하면서 보석의 최소 범위를 찾습니다. 
이 방식은 중복된 보석을 효율적으로 처리하며, 보석 배열을 한 번만 스캔하기 때문에 시간 복잡도가 크게 줄어듭니다.
*/

// function solution(gems) {
//     var answer = [];
//     const type = new Set(gems).size;
//     let temp = true;
//     for (let start = 0; start <= gems.length - type && temp; start++) {
//         let endIndex = type + start;
//         for (let startIndex = 0; startIndex <= gems.length - endIndex && temp; startIndex++) {
//             const map = new Map();
//             for(let i=startIndex; i<endIndex+startIndex; i++) {
//                 map.set(gems[i], (map.get(gems[i]) || 0) + 1);
//             }
//             const findType = map.size;
//             if (findType === type) {
//                 answer = [startIndex+1, endIndex+startIndex];
//                 temp = false;
//             }
//         }
//     }
//     return answer;
// }

function solution(gems) {
    const type = new Set(gems).size;
    const map = new Map();
    let start = 0;
    let end = 0;

    map.set(gems[0], 1);
    let answer = [0, gems.length - 1]; 

    while (start < gems.length && end < gems.length) {
        if (map.size === type) { 
            if (end - start < answer[1] - answer[0]) {
                answer = [start, end]; 
            }
            // 가져온 숫자가 1일 경우 삭제
            if (map.get(gems[start]) === 1) {
                map.delete(gems[start]);
            // 1보다 많을 경우 값에서 1을 줄여준다.
            } else {
                map.set(gems[start], map.get(gems[start]) - 1);
            }
            start++;
        } else { 
            // map에 모든 값들이 들어갈 수 있는 경우를 넣어둔다.
            end++;
            map.set(gems[end], (map.get(gems[end]) || 0) + 1);
        }
    }

    return [answer[0] + 1, answer[1] + 1]; 
}




console.log(solution(['DIA', 'RUBY', 'RUBY', 'DIA', 'DIA', 'EMERALD', 'SAPPHIRE', 'DIA']));
