/*
해설
1. 10 진수 값을 전달을 받습니다.
2. 3진수로 바꾼뒤 순서를 앞뒤로 바꿉니다.
3. 다시 10진수로 바꿔서 내보냅니다.

풀이
1) (toSTring) 10진수 값을 받아 3진수로 변환시킵니다.
2) (split + reverse + join) 거꾸로 정렬을 해주기 위해 해당 메소드를 사용합니다.
3) (parseInt) 마지막으로 다시 10진수로 변경해주기 위해서 메소드를 사용합니다.
*/


function solution(n) {
    return parseInt(Number(n.toString(3).split('').reverse('').join('')), 3);
}

console.log(solution(45));
