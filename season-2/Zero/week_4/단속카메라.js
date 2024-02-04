/*
해설
마지막 위치에다가 감시카메라를 설치합니다.

설치한 카메라에 포함이되는 경로는 필요가 없으므로 배열에서 제외합니다.

풀이
1) 출발 위치를 기준으로 정렬을 진행한다.
2) 마지막 설치 포인트를 잡습니다. 설치 포인트를 기준으로 더 큰 값이 나오거나 혹은 모두 다 제거할 때까지 제거합니다.
3) 감시카메라를 설치할 때 마다 포인트 갯수를 추가합니다.
*/

function solution(routes) {
    var answer = 0;
    routes.sort((a, b) => b[1] - a[1])
    console.log(routes)

    while (routes.length !== 0) {
        const searchPoint = routes[routes.length - 1][1];
        while (true) {
            if (routes.length === 0 || searchPoint < routes[routes.length - 1][0]) {
                break;
            }
            routes.pop();
        }

        // 감시카메라가 추가되었으므로 더해준다.
        answer++;
    }

    return answer
}


console.log(solution([[2, 2], [0, 1], [-10, 9]]))