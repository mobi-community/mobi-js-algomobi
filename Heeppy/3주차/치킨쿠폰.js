// 프로그래머스 치킨은 치킨을 시켜먹으면 한 마리당 쿠폰을 한 장 발급한다.
// 쿠폰을 열 장 모으면 치킨을 한 마리 서비스로 받을 수 있고, 서비스 치킨에도 쿠폰이 발급된다.
// 시켜먹은 치킨의 수 chicken이 매개변수로 주어질 때 받을 수 있는 최대 서비스 치킨의 수를 return하도록 solution 함수 완성

function solution(chicken) {
  let coupon = chicken;
  let serviceChickenSum = 0;

  while (coupon >= 10) {
    const newChickenService = Math.floor(coupon / 10);
    serviceChickenSum += newChickenService;
    coupon = (coupon % 10) + newChickenService;
  }
  return serviceChickenSum;
}
