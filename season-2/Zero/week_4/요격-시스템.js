/*
해설

이전 감시카메라 문제와 똑같다.

다른점은 만약 끝점의 경우는 같은 것으로 포함을 안한다는 것.

풀이
1. (while) targets의 길이가 0이 될 때까지 반복한다.
2. (pop) 이전 값과 비교를 하였을 때 이전 값이 마지막으로 설치했던 cctc 범위 안에 들어오면 cctvPoint를 변경해준다. 아닐 때까지 반복.
3. (pop) 만약 이전 값 설치포인트 안에는 들어오지만 시작 지점이 적은 경우 cctvPoint를 변경하지 않고 반복을 계속 진행한다.
4. (breack) 만약 설치포인트 안에 못들어온 경우 해당 지점에 설치를 하므로 pop을 통해 배열을 지워주고 반복문을 마무리 한다.
5. (++) 감시카메라가 설치될 때마다 하나씩 증가시킨다.
6. (return) 감시카메라의 갯수를 리턴한다.
*/

function solution(targets) {
    var answer = 0;
    targets.sort((a, b) => a[1] - b[1]);
    console.log(targets);
    while (targets.length !== 0) {
        let cctvPoint = targets[targets.length - 1][0] + 0.5;
        while (true) {
            if (targets.length > 1 && targets[targets.length - 2][0] + 0.5 > cctvPoint) {
                cctvPoint = targets[targets.length - 2][0] + 0.5;
                targets.pop();
            }
            else if (targets.length > 1 && targets[targets.length - 2][1] > cctvPoint && targets[targets.length - 2][0] < cctvPoint) {
                targets.pop();
            } else{
                targets.pop();
                break
            }
        }
        answer++;
    }

    return answer;
}

console.log(
    solution([
        [4, 5],
        [4, 8],
        [10, 14],
        [11, 13],
        [5, 12],
        [3, 7],
        [1, 4],
    ])
);
