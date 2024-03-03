/*

해설 
좌석은 중심으로부터 2m, 3m, 4m 거리에 위치하고 있습니다. 
각 좌석의 위치 비율을 구하면 2:3, 2:4, 3:4가 됩니다. 즉, 3:2, 2:1, 4:3이 됩니다.


풀이

객체를 만들어 몸무게와 그 몸무개의 해당하는 숫자를 집어넣습니다.
전달받은 무게를 반복하여 해당 비율(3:2, 2:1, 4:3)에 해당하는 숫자가 있는지 판단하고 해당하는 숫자의 갯수만큼 가능한 횟수를 추가합니다.
*/

function solution(weights) {
    var answer = 0;

    const dict = {}

    weights.sort((a, b) => a - b);

    for (let weight of weights) {
        !dict[weight] ? dict[weight] = 1 : dict[weight]++
    }

    for (let weight of weights) {
        if (dict[weight] > 1) answer += (dict[weight] - 1);

        const Ratio = [weight * (3 / 2), weight * 2, weight * (4 / 3)]

        for (let i = 0; i < Ratio.length; i++) {
            if (dict[Ratio[i]] > 0) {
                answer += dict[Ratio[i]]
            }
        }

        dict[weight] -= 1;
    }

    return answer;
}

console.log(solution([100, 180, 360, 100, 270]))
