/*
풀이

1. 모든 값을 순회를 하면서 포함이 안되는 부분을 찾습니다.
2. 해당하지 않을 경우 answer를 추가하면서 기존에 안되어 있는 부분에 true 값을 할당합니다.
3. 추가된 answer를 리턴합니다.

문제.

매번 array의 값을 찾기 때문에 n이 최대 2억개 까지 가능한데 그럴경우 O(200_000_000)의 시간 + @가 됩니다.
또한 매번 w 만큼 반복을 돌면서 추가하기 때문에 시간이 기하급수적으로 늘어납니다.

수정
매번 반복을 하지 않아도 되게 배열은 만들지 않습니다.

1. 배열을 반복합니다.
2. 만약 stations의 걸릴경우 position의 위치 + w + 1 만큼을 늘려줍니다.
*/

// function solution(n, stations, w) {
//     var answer = 0;

//     const array = new Array(n).fill().map((v, i) => {
//         return !!stations.filter(
//             (val) => (i + 1 - w <= val && i + 1 >= val) || (i + 1 + w >= val && i + 1 <= val) || val === i + 1
//         ).length;
//     });

//     let selctIndex = 0;

//     console.log(array);

//     while (selctIndex < array.length) {
//         if (!array[selctIndex]) {
//             for (let i = 0; i < w * 2 + 1; i++) {
//                 selctIndex++;
//                 array[selctIndex] = true
//             }
//             answer++;
//         } else {
//             selctIndex++;
//         }
//     }
//     return answer;
// }

function solution(n, stations, w) {
    var answer = 0;
    var position = 1;
    var stationIndex = 0;

    while (position <= n) {
        if (stationIndex < stations.length && stations[stationIndex] - w <= position) {
            position = stations[stationIndex++] + w + 1;
        } else {
            answer++;
            position += w * 2 + 1;
        }
    }

    return answer;
}


console.log(solution(11, [4, 11], 1));
