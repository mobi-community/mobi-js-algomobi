/*
해설
스킬트리를 배우기 위해서는 배워야하는 순서가 정해져있다. 해당 스킬들은 중복이 되지 않으므로 만약 이전에 배운게 없다면 해당 스킬트리는 사용 할 수 없다.

풀이
1. (for) 모든 스킬트리를 순회한다.
2. (temp) 만약 해당 스킬트리가 성립하지 않는다고 생각한다면 temp를 통해 빠져나올 수 있도록 임시 변수를 선언해준다.
3. (checked) checked를 통해서 순서가 필요한 스킬이 있는지, 또 해당 스킬을 지금 배울 수 있는지를 판단할수 있도록 한다.
    3. (true) 만약 포함이 되고 순서가 맞다면 체크를 해야하는 순서 마지막을 지워줍니다.
    3. (false) 만약 순서가 맞지 않다면 temp를 false를 바꿔줌으로서 해당 반복문에서 빠져나옵니다.
4. (temp) temp를 통해서 해당 스킬트리가 유효한 스킬트리인지 확인이 가능합니다. 해당 부분이 유효하다면 answer의 값을 올려줍니다.
*/

function solution(skill, skill_trees) {
    var answer = 0;
    for (let sk of skill_trees) {
        let temp = true
        const checked = [...skill].reverse()
        for (let i = 0; i < sk.length && temp; i++) {
            if (checked.includes(sk[i])) {
                if (checked[checked.length - 1] === sk[i]) {
                    checked.pop()
                } else {
                    temp = false
                }
            }
        }

        if (temp) {
            answer++
        }
    }
    return answer;
}

console.log(solution("CBD", ["BACDE", "CBADF", "AECB", "BDA"]))