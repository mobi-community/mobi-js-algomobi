/*
해설

튜브의 순서, 게임에 참가하는 인원, 미리 구할 숫자의 갯수를 통해 튜브가 가지고 있어야하는 문자를 구해둔다.

ex 튜브의 순서가 3, 게임에 참가하는 인원이 5, 미리 구할 숫자의 갯수가 3개라면, 3, 8, 13

풀이
1. (push) 튜브가 구할 숫자들의 값을 미리 구합니다. needNumbers
2. (while) needNumbers의 마지막 원자 => "튜브가 필요한 수" 까지 반복을 돌면서 값을 구합니다.
3. (map) 구해진 title의 needNumbers의 원소를 인덱스 값으로 접근하여 필요한 값들만 가져옵니다.
4. (join) 원소들을 문자열로 바ㅜㄲㅂ니다.

*/

function solution(n, t, m, p) {
    let title = ""
    let needNumbers = []
    let count = 0

    for (let i = 0; i < t; i++) {
        needNumbers.push(p - 1)
        p += m
    }

    while (true) {
        if (title.length > needNumbers[needNumbers.length - 1]) break
        title += count.toString(n).toUpperCase()
        count++;
    }

    return needNumbers.map(v => title[v]).join('');
}

console.log(solution(2, 3, 5, 3))

// console.log(Number(222).toString(16))

// console.log(solution(16, 16, 2, 1))