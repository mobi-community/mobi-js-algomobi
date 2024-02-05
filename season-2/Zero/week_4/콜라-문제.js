/*
해설
빈병 a 만큼 가져다 주면

전달해주는 콜라의 갯수 b와
빈병 n 갯수가 주어진다.

몇병을 마실 수 있는지 고른다.

풀이

1. (while) n의 갯수가 a보다 작아질때까지 반복한다.
2. 남겨진 병의 갯수와 합친다.
3. 바뀐 병의 갯수를 구한다.
4. 해당 과정을 반복한다.
*/

function solution(a, b, n) {
    var answer = 0;
    while (n >= a) {
        const result = Math.floor(n / a) * b
        answer += result
        n %= a
        n += result
    }
    return answer;
}

console.log(solution(2, 1, 20))