/*

설계

bfs
1. bfs를 이용하여 모든 숫자를 더해보고. 가장 큰 수를 리턴해본다.

=> 시간 초과

sort
정렬
1. 정렬 알고리즘이 필요하다.
    [9, 31, 4] 가 있을 경우 "9431"
    9999, 4444, 3131 이런식으로 만들어서 정렬하면 어떨까?
*/

function solution(order) {
    return order.filter(v => v !== 0).length === 0 ? "0" : order.sort((a, b) => Number(String(b).repeat(4).substring(0, 4)) - Number(String(a).repeat(4).substring(0, 4))).join('')
}
