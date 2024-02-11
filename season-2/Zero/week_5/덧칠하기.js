/*
해설

1. section의 마지막을 그리기 포인트로 잡습니다.
2. 만약 그려야하는 포인트들이 포함이 된다면 넘어갑니다.
3. 만약 포함이 되지 않느다면 다음 그리기 포인트를 잡습니다.

풀이
1. (while) 그려야하는 지점이 없어질 때까지 반복을 돌립니다.
2. 그려야 하는 마지막 지점을 그리기 시작해야하는 지점으로 잡습니다.
3. (while) 그려야 하는 지점에서 그리기 가능한 지점까지의 거리에 포함이 되는 지점들을 제거합니다.
4. 만약 마지막 남은 지점이 그릴 수 있는 범위에서 벗어날 시에는 새로운 그리기 포인트를 잡습니다.
*/

function solution(n, m, section) {
    var answer = 0;
    while (section.length !== 0) {
        const drawingPoint = section[section.length - 1]

        while (true) {
            if (drawingPoint - m + 1 > section[section.length - 1] || section.length === 0) {
                break
            }
            section.pop();
        }

        answer++
    }
    return answer;
}

console.log(solution(8, 4, [2, 3, 6]))