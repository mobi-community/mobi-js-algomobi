/*
풀이

1. 자판들의 각 키를 Map을 이용하여 저장을 합니다.
2. Set을 이용하여 값이 Map에 들어있는지 확인 할 수 있게 저장을 해줍니다.
3. 이후 target을 이용하여 가장 작은 수의 인덱스로 저장되어 있는 키보드의 카운트 횟수를 찾습니다.
4. 만약 값이 저장되어있지 않은 경우 temp를 false로 저장하여 이후 temp가 false 일 경우 -1을 리턴합니다.
*/

function solution(keymap, targets) {
    let keyboards = new Array();
    let keyboard_can_word = new Set();
    for (let keyboard of keymap) {
        let keys = new Map();
        for (let i = 0; i < keyboard.length; i++) {
            if (keys.has(keyboard[i])) continue;
            keys.set(keyboard[i], i + 1);
            keyboard_can_word.add(keyboard[i]);
        }
        keyboards.push(keys);
    }
    var answer = [];

    for (let target of targets) {
        let temp = true;
        let count = 0;
        for (let key of target) {
            if (!keyboard_can_word.has(key)) {
                temp = false;
                break;
            }

            let touchCount = Math.min(...keyboards.filter((val) => val.has(key)).map((v) => v.get(key)));
            count += touchCount;
        }
        answer.push(!temp ? -1 : count);
    }

    return answer;
}

console.log(solution(['ABACD', 'BCEFD'], ['ABCD', 'AABB']));
