/*
해설
받아온 값들을 전부 뒤집는다.

goal을 보고 만약 넣을 값이 없다면 그대로 종료한다.

넣을 값이 있다면 card1과 card2의 값을 하나씩 빼와서 비교한다.

풀이
1. (while) 길이만큼 지속을 해야하기 때문에 어느정도 반복할지 알지 못한다.
2. (if) 만약 cards1의 마지막 값이 일치한다면 cards1의 값을 제거한다.
3. (if) 만약 cards2의 마지막 값이 일치한다면 cards2의 값을 제거한다.
4. (else) 만약 들어갈 값이 없다면 그대로 종료한다.


*/

function solution(cards1, cards2, goal) {
    cards1.reverse();
    cards2.reverse();
    const result = [];
    
    while (result.length !== goal.length) {
        if (cards1.length > 0 && cards1[cards1.length - 1] === goal[result.length]) {
            result.push(cards1.pop());
        } else if (cards2.length > 0 && cards2[cards2.length - 1] === goal[result.length]) {
            result.push(cards2.pop());
        } else {
            break;
        }
    }
    
    return result.length === goal.length ? "Yes" : "No";
}

console.log(solution(["i", "water", "drink"],	["want", "to"],	["i", "want", "to", "drink", "water"]));
