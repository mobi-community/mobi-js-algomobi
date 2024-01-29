/*
getDivisors = 지정된 숫자의 약수를 함수를 만든다.

(length) 모든 숫자들의 약수의 갯수의 합을 구한다.

(map) 문을 통해 limit를 넘는다면 power를 만들어준다.

(reduce) 문을 통해 해당 숫자들의 총 합을 구해준다.
*/

function getDivisors(num) {
    const divisors = [];
    for (let i = 1; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            divisors.push(i);
            if (num / i != i) divisors.push(num / i);
        }
    }

    return divisors;
}

function solution(number, limit, power) {
    var answer = [];
    for (let i = 1; i <= number; i++) {
        answer.push(getDivisors(i).length);
    }

    return answer.map((v) => (v > limit ? power : v)).reduce((prev, next) => prev + next);
}

console.log(solution(10, 3, 2));
