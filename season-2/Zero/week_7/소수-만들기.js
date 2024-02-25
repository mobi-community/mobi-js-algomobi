/*
풀이

모든 숫자를 탐색합니다.

1. 만약 이전에 갔던 번호거나 이전의 탐색한 인덱스보다 낮을 경우 탐색을 하지 않습니다.
2. 방문한 길이가 3이 될 때까지 조회를 반복합니다.
3. 결과를 단순화 하기 위해 중복된 결과를 조회하지 않게 sort후 set에 저장합니다.
4. 마지막으로 조회했던 결과 리스트를 조회합니다.
5. 소수인지 아닌지 판단하는 isPrime 함수를 만듭니다.
6. 소수라면 answer의 값을 올려서 저장합니다.
*/

function isPrime(n) {
    if (n < 2) return false;
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) return false;
    }
    return true;
}

function solution(nums) {
    var answer = 0;
    const result = []
    const resultMap = new Set()
    const dp = (visited, value, sum, index) => {
        const copy = [...visited]
        copy.push(value)

        if (copy.length < 3) {
            for (let i = 0; i < nums.length; i++) {
                if (copy.includes(nums[i]) || index > i) continue
                dp(copy, nums[i], sum + nums[i], i)
            }
        } else {
            let val = copy.sort((a, b) => a - b).toString()
            if (resultMap.has(val)) return
            resultMap.add(val)
            result.push(sum)
        }
    }

    for (let i = 0; i < nums.length; i++) {
        dp([], nums[i], nums[i])
    }

    result.forEach(val => {
        if (isPrime(val)) answer++
    })

    return answer;
}
console.log(solution([1, 2, 3, 4]))