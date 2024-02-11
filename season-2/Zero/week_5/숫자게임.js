/*
해설
1. A와 B를 내림차순으로 정렬을 한다.
2. 만약 마지막 B가 A보다 작거나 같을 경우 B를 없애고
3. 마지막 B가 A보다 클경우 둘 다 없애고 winning-point를 증가시킨다.

풀이
1. (sort) A와 B 둘 다 정렬을 진행한다.
2. (if) 두 집합의 마지막 원소를 비교한다.
    (true)
        (pop)B의 점수가 더 크므로 해당 비교는 성공적이다 따라서 두 집합의 마지막 원소를 제거해준다.
        (++)이후 점수를 올려준다.
    (false)
        (pop)만약 B의 마지막 원소가 A보다 작거나 같으면 B의 원소를 없앰으로서 더 높은 점수가 오게한다. (점수를 얻게하기 위함), 
*/

function solution(A, B) {
    var answer = 0;
    const SortA = A.sort((a, b) => b - a)
    const SortB = B.sort((a, b) => b - a)

    while (SortB.length !== 0) {
        if (SortB[SortB.length - 1] > SortA[SortA.length - 1]) {
            SortA.pop();
            SortB.pop();
            answer++;
        } else {
            SortB.pop();
        }
    }
    return answer;
}

console.log(solution([5, 1, 3, 7], [2, 2, 6, 8]))