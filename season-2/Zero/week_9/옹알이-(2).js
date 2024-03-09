/*
풀이

1. 만약 마지막으로 일치했던 바꿨던 옹알이 한것이 지금 문자와 갔다면 넘어갑니다.
2. 시작하는 문자가 일치하는지 확인합니다.
3. 일치한다면 마지막 옹알이와 값을 바꿉니다.
4. 값이 바뀌었다면 1로 돌아갑니다.
5. 값이 바뀌지 않았다면 문자열이 비어있는지 비교후 answer의 값을 늘려줍니다.
*/

const CAN_WORD = ['aya', 'ye', 'woo', 'ma'];

function solution(babbling) {
    var answer = 0;
    babbling.forEach((element) => {
        let last = '';

        while (true) {
            let prev = element;
            CAN_WORD.forEach((word) => {
                if (word === last) return;

                if (element.startsWith(word)) {
                    element = element.replace(word, ' ');
                    last = word;
                }
            });

            if (!element.includes(' ') || element === prev) break;
            else {
                element = element.trim();
            }
        }
        if (element === '') answer++;
    });
    return answer;
}

console.log(solution(['ayaayaa', 'ye']));
