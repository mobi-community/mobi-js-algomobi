/*
    해설

    1. 일치하는 갯수를 찾아냅니다.
    2. 해당 값들은 똑같아 질 수 있는 최소 갯수로 정해줍니다.
    3. 0의 갯수를 찾아냅니다.
    4. 일치하는 갯수와 합쳐서 최대가 6이 되도록 설정합니다.
    5. 각자의 맞는 랭크를 구해서 반환합니다.
*/

const example = [
    [[44, 1, 0, 0, 31, 25], [31, 10, 45, 1, 6, 19]],
    [[0, 0, 0, 0, 0, 0], [38, 19, 20, 40, 15, 25]],
    [[45, 4, 35, 20, 3, 9], [20, 9, 3, 45, 4, 35]]
]

function getRank(number) {
    switch (number) {
        case 6:
            return 1
        case 5:
            return 2
        case 4:
            return 3
        case 3:
            return 4
        case 2:
            return 5
        default:
            return 6
    }
}

function solution(lottos, win_nums) {
    const minLength = lottos.filter(val => win_nums.includes(val)).length
    const maxLength = Math.min(6, minLength + lottos.filter(val => val === 0).length)
    return [getRank(maxLength), getRank(minLength)];
}

example.forEach(val => {
    console.log(solution(...val))
})