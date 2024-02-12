/*
풀이

1. (new Array) level 배열을 생성하여 1부터 N까지의 스테이지 번호를 저장합니다. 
2. (new Array) clearCount 배열은 각 스테이지의 클리어된 플레이어 수를 저장하기 위해 생성합니다. 
3. (sort) stages 배열을 오름차순으로 정렬합니다.
4. 1부터 N까지의 스테이지에 대해서 클리어된 플레이어 수를 계산합니다. 
5. (for) stages 배열을 순회하면서 현재 스테이지와 같은 값이 있는지 확인하고, 있을 경우 check 변수를 증가시킵니다. 
6. 이렇게 계산된 클리어된 플레이어 수를 clearCount 배열에 저장합니다.
7. 클리어 비율은 클리어된 플레이어 수를 전체 플레이어 수로 나눈 값으로 계산됩니다. 이를 clearCount 배열에 저장합니다.
8. 마지막으로, clearCount 배열을 기준으로 level 배열을 내림차순으로 정렬합니다. 
9. 이렇게 정렬된 level 배열을 반환합니다.
*/

function solution(N, stages) {
    const level = new Array(N).fill(0).map((v, i) => i + 1);
    const clearCount = new Array(N).fill(0);
    stages.sort((a, b) => a - b);

    for (let i = 1; i <= N; i++) {
        let check = 0;

        for (let j = 0; j < stages.length; j++) {
            if (stages[j] === i) {
                check++;
            }
        }

        clearCount[i - 1] = check / stages.length;
        stages = stages.filter(stage => stage !== i);
    }

    level.sort((a, b) => clearCount[b - 1] - clearCount[a - 1]);

    return level;
}