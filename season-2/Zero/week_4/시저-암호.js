/*
해설

알파벳을 정해진 위치만큼 밀어서 암호를 만든다.

대문자 Z를 넘어갈 경우 A부터 시작한다.

소문자 z를 넘어갈 경우 a부터 시작한다.

아스키 코드를 이용하여 몇번째 문자인지 구한다.

소문자인 경우 lowerCase를 실행

대문자의 경우 UpperCase를 실행.

1. (split) 모든 문자열을 비교를 아스키 문자로 대소문자인지 구분하기 위해서 분리한다.
2. (map) 각 자리마다 값이 변해서 리턴이 되야하기 때문에 map을 실행한다.
3. (!==) " " 공백의 경우 바로 내보내줘야하기 때문에 바로 리턴해준다.
4. UpperCase 대문자의 경우 실행이 되는 메소드로 Z 너머의 아스키코드와 변경되는 값을 가지고있다. 값이 지나갈 경우 값을 처음부터로 변경해준다.
5. LowerCase 소문자의 경우 실행이 되는 메소드로 z 너머의 아스키코드와 변경되는 값을 가지고있다. 값이 지나갈 경우 값을 처음부터로 변경해준다.
6. (join) 변경된 값들을 join을 통해 하나의 문자열로 변경해준다.
*/

function upperCase(char, number) {
    let result = char + number
    if (result >= 91) {
        result -= 26
    }
    return String.fromCharCode(result)
}


function lowerCase(char, number) {
    let result = char + number
    if (result >= 123) {
        result -= 26
    }
    return String.fromCharCode(result)
}

function solution(s, n) {
    return s.split('').map(v => {
        if (v === " ") {
            return " "
        }
        const index = v.charCodeAt()

        return index < 91 ? upperCase(index, n) : lowerCase(index, n)
    }).join('');
}

console.log(solution("a B z", 4))