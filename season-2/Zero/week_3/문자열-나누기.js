/*
해설
반복문을 통해 문자를 비교한다.

처음 문자를 x로 칭한다.

x와 다른 문자들의 숫자가 같아질 경우 해당 문자열은 제외한다.

이 과정을 읽을 숫자들이 더이상 없을 때까지 반복한다.
*/


function solution(s) {
    var answer = 0;
    let x = ""
    let x_count = 0;
    let y_count = 0;
    for(let i = 0; i < s.length ; i++){
        if(x === "") x = s[i]

        if(x === s[i]) ++x_count;
    
        if(x !== s[i]) ++y_count;

        if(x_count >= 1 && x_count === y_count) {
            answer++
            x = ""
            x_count = 0;
            y_count = 0;
        }
    }
    return x !== "" ? answer + 1 : answer;
}

console.log(solution("abracadabra"))