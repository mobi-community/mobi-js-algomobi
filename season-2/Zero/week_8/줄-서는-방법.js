/*
풀이
1. 주어진 숫자 n만큼의 길이를 가진 배열 user를 생성합니다.
2. 팩토리얼을 저장할 fact를 생성합니다.
3. user가 남아있는 동안 반복을 진행합니다.
    3-1 팩토리얼 배열에서 n-1번째 요소를 temp에 저장합니다.
    3-2 temp가 k보다 작은 동안, 인덱스를 증가시키고 temp에 n-1번째 팩토리얼을 더합니다.
    3-3 k에서 temp에서 n-1번째 팩토리얼을 뺀 값을 뺍니다.
    3-4 n을 1 감소시킵니다.
4.이후 만들어진 answer를 반환합니다.
*/

function solution(n, k) {
    var answer = [];
    let user = new Array(n).fill('').map((v, i) => i + 1)

    let fact = [1];
    for (let i = 1; i <= n; i++) fact[i] = fact[i - 1] * i;

    while (user.length) {
        let temp = fact[n - 1];
        let index = 0;
        while (temp < k) {
            index++;
            temp += fact[n - 1];
        }
        k -= (temp - fact[n - 1]);
        n--;
        answer.push(user[index]);
        user.splice(index, 1);
    }
    return answer
}

console.log(solution(7, 30))




