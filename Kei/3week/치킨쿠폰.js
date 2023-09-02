/*
치킨 쿠폰
문제 설명
프로그래머스 치킨은 치킨을 시켜먹으면 한 마리당 쿠폰을 한 장 발급합니다. 쿠폰을 열 장 모으면 치킨을 한 마리 서비스로 받을 수 있고, 서비스 치킨에도 쿠폰이 발급됩니다. 시켜먹은 치킨의 수 chicken이 매개변수로 주어질 때 받을 수 있는 최대 서비스 치킨의 수를 return하도록 solution 함수를 완성해주세요.

입출력 예
chicken	result
100	11
1,081	120
*/

/*
100마리 -> 10장, 여기서 10장을 모으면 +1 서비스 추가 => 총 11마리
1081일 때 -> 1081 / 10 내림! (floor), 108마리에 쿠폰 1장 남음
108 마리 -> 10마리에 쿠폰 8장 남음 + 1장 추가
108 + 10 + 1 + 1 = 120마리
*/

function solution(chicken) {
  let freeChicken = 0; // 총
  // while문으로 chicken을 10으로 나누고, 10으로 나눌 수 없을 때까지 돌리기
  while (chicken >= 10) {
    let coupon = Math.floor(chicken / 10); // 쿠폰 갯수 구하는 로직
    freeChicken += coupon; // 108 + 10 + 1 + 1
    chicken = (chicken % 10) + coupon; // 109, 19, 10, 1이 되었을 때 종료(남는 쿠폰 저장하는 로직)
  }
  return freeChicken;
}

console.log(solution(100)); // 11
console.log(solution(1081)); // 120
