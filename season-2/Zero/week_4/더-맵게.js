/*
해설

모든 음식을 스코빌 지수 k 이상으로 만들기 위해 아래와 같은 공식을 사용합니다.
> 섞은 음식의 스코빌 지수 = 가장 맵지 않은 음식의 스코빌 지수 + (두 번째로 맵지 않은 음식의 스코빌 지수 * 2)

오답 노트
기존 작성했던 코드에서는 매번 조회, filter를 반복하니 당연히 시간 초과가 날 수 밖에 없었다.

풀이방법.

스코빌 지수 K를 넘는 최소 값만을 남겨둔채 진행한다. (두 번째로 맵지 않은 음식의 스코빌 지수)로 사용하기 위해서

ex scoville = [1, 2, 3, 4, 8, 10] k = 7

min = 8;

scoville = [1, 2, 3, 4]

1. [5, 3, 4] => 정렬
2. [3, 4, 5]
3. [11, 5] => 정렬, 제외 count = 1
4. [5, 11]
5. [5] => 정렬, 제외 count = 2
6. => 모든 값이 제외되었으므로 2 리턴
*/

/*
기존 작성했던 코드

function solution(scoville, K) {
    let count = 0;
    let scov = scoville
    if (scov.reduce((a, b) => a + b, 0) < K) return -1

    while (!scov.every(v => v >= K)) {
        let firstMinValueIndex = scov.findIndex(v => v === Math.min(...scov))
        let firstExceptArray = scov.filter((v, i) => i !== firstMinValueIndex)

        if (firstExceptArray.length === 0) return -1

        let secondMinValue = Math.min(...firstExceptArray)
        let secondMinValueIndex = scov.findIndex(v => v === secondMinValue)

        scov[firstMinValueIndex] = scov[firstMinValueIndex] + secondMinValue * 2
        scov = scov.filter((val, idx) => idx !== secondMinValueIndex)
        count++;
    }

    return count === 0 ? -1 : count;
}
*/

function solution(scoville, K) {
    let answer = 0;

    // 오름차순으로 정렬
    scoville.sort((a, b) => b - a);

    while (scoville[scoville.length - 1] < K) {
        // 가장 맵지 않은 음식의 스코빌 지수
        const leastSpicy = scoville.pop();
        // 두 번째로 맵지 않은 음식의 스코빌 지수
        const secondLeastSpicy = scoville.pop();

        // 섞은 음식의 스코빌 지수 계산 및 배열에 추가
        const mixedSpicy = leastSpicy + (secondLeastSpicy * 2);
        scoville.push(mixedSpicy);

        // 섞은 후 다시 정렬
        scoville.sort((a, b) => b - a);

        answer++;

        // 모든 음식의 스코빌 지수가 K 이상이 되면 반복 종료
        if (scoville[scoville.length - 1] >= K) {
            break;
        }

        // 음식이 하나만 남았는데 K 이상이 되지 않는 경우
        if (scoville.length === 1 && scoville[0] < K) {
            return -1;
        }
    }

    return answer;
}


console.log(solution([1, 1, 1], 8))