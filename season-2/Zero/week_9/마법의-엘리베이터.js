/*
풀이

1. storey = 층수가 0이 될 때까지 반복합니다.
2. 매번 [1, 10 ,100]이 될 수 있게 최소한의 움직임을 할 수 있게 0으로 맞춰줍니다.
3. 0을 기준으로 하기때문에 각 층마다 Math.floor를 통해 10을 나눈 나머지 값을 기준으로 이동합니다.
4. 만약 10을 나눈 값이 5일 경우 앞의 수가 5인지를 확인합니다.
*/

function solution(storey) {
    var answer = 0;
    while (storey) {
        const one = storey % 10;
        storey = Math.floor(storey / 10);
        if (one === 0) {
            continue
        }
        else if (one > 5) {
            storey += 1
            answer += 10 - one
        }
        else if (one === 5) {
            if (Math.round(storey % 10 / 10) === 1) {
                storey += 1
                answer += 5
            } else {
                answer += 5
            }
        }
        else {
            answer += one
        }
    }
    return answer;
}
