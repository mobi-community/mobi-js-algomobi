/*
설계 1.
0. 음식들은 배열을 통해 키 값(음식의 순서) 밸류 값(음식의 갯수)의 형태의 객체 배열로 저장한다.
1. (return) 모든 음식의 수보다 네트워크 오류시점이 높다면 -1을 리턴한다.
2. 음식을 순서에 맞게 하나씩 먹으면서 번호를 더한다.
3. (pop) 만약 마지막 번호까지 갔다면 다먹은 음식의 접시를 치운다.
4. (while) 1 ~ 2 과정을 3에 해당할 때까지 반복한다.
5. (break) 현재 시간과 네트워크 오류가난 시점과 같다면 반복문을 멈춘다.
6. (return) 현재 시간에 맞는 인덱스 번호를 리턴한다.


문제
번호를 1씩 더해서하니 시간이 너무 오래걸린다. 따라서 숫자를 더하지 않는 방법으로 생각한다.


설계 2.
0. 음식들은 배열을 통해 키 값(음식의 순서) 밸류 값(음식의 갯수)의 형태의 객체 배열로 저장한다.
1. (return) 모든 음식의 수보다 네트워크 오류시점이 높다면 -1을 리턴한다.
2. 최소 음식의 갯수(ex: [1, 10, 10] => 1번씩 모두 제외할 수 있으므로 3번 제외한다.)까지 오류 번호를 제외(ex: k = 10, k -3)한다. 
3. (pop)이후 해당 최소 음식과 같은 값을 가진 값들을 삭제한다.
4. (while)남아있는 음식의 갯수가 오류 번호보다 같거나 많아질 때까지 (2 ~ 3번)반복한다.
5. (return)남아있는 오류번호에 맞게 남은 음식의 인덱스 번호를 통해 키 값을 반환한다.
*/

const example = [[1, 10, 10], 6]; // 3

function solution(food_times, k) {
    let totalSum = food_times.reduce((a, b) => a + b, 0)
    let q = []
    let sumValue = 0

    food_times.map((value, index) => {
        q.push({
            index: index + 1,
            value,
        })
    })

    q.sort((a, b) => b.value - a.value)

    if (totalSum <= k) return -1

    while ((q[q.length - 1].value - sumValue) * q.length <= k) {
        let minValue = q[q.length - 1].value
        k -= (minValue - sumValue) * q.length
        sumValue = minValue

        while (q[q.length - 1].value === minValue) {
            q.pop()
        }
    }


    q.sort((a, b) => a.index - b.index)
    return q[k % q.length].index
}

console.log(solution(...example));