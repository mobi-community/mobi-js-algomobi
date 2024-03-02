function solution(n) {
    const char = [1, 2, 4];
    var answer = '';
    n -= 2;
    while (true) {
        if (n < 3) {
            n += 1;
            answer += String(char[n % 3]);
            break;
        }
        answer += String(char[n % 3]);
        n = Math.floor(n / 3) - 1;
    }
    return answer;
}

console.log(solution(40));
