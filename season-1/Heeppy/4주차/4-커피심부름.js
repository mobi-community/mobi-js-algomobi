// 팀의 막내인 철수는 아메리카노와 카페 라떼만 판매하는 카페에서 팀원들의 커피를 사려고 한다. 아메리카노와 카페라떼의 가격은 차가운 것과 뜨거운 것 상관 없이 각각 4500, 5000원 이다. 각 팀원에게 마실 메뉴를 적어달라고 하였고, 그 중에서 메뉴만 적은 팀원의 것은 차가운 것으로 통일하고 "아무거나"를 적은 팀원은 차가운 아메리카노로 통일하기로 하였다.

// 각 직원이 적은 메뉴가 문자열 배열 order로 주어질 때, 카페에서 결제하게 될 금액을 return하는 solution 함수를 작성해 주세요. order의 원소는 아래의 것들만 들어오고, 각각의 의미는 다음과 같다.

/**
 * 'iceamericano', 'americanoice' 4500
 * 'hotamericano','americanohot' 4500
 * 'icecafelatte','cafelatteice'
 * 'hotcafelatte','cafelattehot'
 * 'americano'
 */

function solution(order) {
  var price = 0;
  order.map((str) => {
    if (str.indexOf("americano") != -1) {
      price += 4500;
    } else if (str.indexOf("cafelatte") != -1) {
      price += 5000;
    } else price += 4500;
  });
  console.log(price);
}
solution(["cafelatte", "americanoice", "hotcafelatte", "anything"]);
