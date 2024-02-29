/*
풀이

1. 받아온 n을 k의 진수로 변경한다.
2. k를 0을 기준으로 분리한다.
3. 소수인지 판단을 한다.
4. 소수만 들어있는 배열의 길이를 반환한다.
*/

function solution(n, k) {
    const answer = n.toString(k).split('0').filter(part => {
        if (!part || part === '1') return false;

        const num = parseInt(part, 10);

        if (num <= 1) return false;

        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) return false;
        }

        return true;
    });

    return answer.length;
}
