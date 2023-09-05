// [치킨 쿠폰](https://school.programmers.co.kr/learn/courses/30/lessons/120884) /

function solution(chicken) {
  let serviceChicken = 0;
  let coupons = 0;

  while (chicken > 0 || coupons >= 10) {
    // 치킨 수에 따라 쿠폰 발급, 쿠폰 사용 => 서비스 치킨 주문
    coupons += chicken; // 치킨 수만큼 쿠폰 지급
    serviceChicken += Math.floor(coupons / 10); // 서비스치킨 -> 쿠폰 10장
    coupons = (coupons % 10) + Math.floor(coupons / 10); // 사용한 쿠폰 빼고 남은 쿠폰 재계산
    chicken = 0; // 다음 주문 치킨 수 => 0으로 설정!
  }

  return serviceChicken;
}

console.log(solution(100)); // 11
console.log(solution(1081)); // 120
