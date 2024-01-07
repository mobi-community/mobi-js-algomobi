// https://school.programmers.co.kr/learn/courses/30/lessons/181837

function solution(order) {
  const menu = {
    iceamericano: 4500,
    hotamericano: 5000,
    icecafelatte: 4500,
    hotcafelatte: 5000,
    americano: 4500,
    cafelatte: 5000,
    anything: 4500, // "아무거나"의 경우 항상 차가운 아메리카노의 가격으로 계산
  };

  let totalCost = 0;

  for (const o of order) {
    // 메뉴 주문 일치
    const standardizedOrder = o.replace("hot", "").replace("ice", "");

    // 가격 합
    totalCost += menu[standardizedOrder];
  }

  return totalCost;
}
