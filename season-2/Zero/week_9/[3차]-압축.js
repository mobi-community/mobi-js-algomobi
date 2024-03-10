/*
풀이

1. 길이가 1인 모든 단어를 포함하도록 사전을 초기화한다.
2. 사전에서 현재 입력과 일치하는 가장 긴 문자열 w를 찾는다.
3. w에 해당하는 사전의 색인 번호를 출력하고, 입력에서 w를 제거한다.
4. 입력에서 처리되지 않은 다음 글자가 남아있다면(c), w+c에 해당하는 단어를 사전에 등록한다.
*/

function solution(msg) {
    let answer = [];
    let wordDic = new Map();
    let wordDicLength = 26;
    let startIndex = 0;

    for (let i = 1; i <= 26; i++) {
        const char = String.fromCharCode(64 + i);
        wordDic.set(char, i);
    }

    while (startIndex < msg.length) {
        let endIndex = startIndex + 1;

        while (endIndex <= msg.length && wordDic.has(msg.substring(startIndex, endIndex))) {
            endIndex++;
        }

        let found = msg.substring(startIndex, endIndex - 1);
        answer.push(wordDic.get(found));

        if (endIndex <= msg.length) {
            let newWord = msg.substring(startIndex, endIndex);
            wordDic.set(newWord, ++wordDicLength);
        }

        startIndex += found.length;
    }

    return answer;
}