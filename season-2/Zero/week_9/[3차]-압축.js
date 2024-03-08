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