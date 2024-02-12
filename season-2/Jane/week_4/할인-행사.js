/*
@ 풀이 방법 생각하기
- 일정한 금액 -> 10일 동안 회원
- 회원 대상으로 매일 한 가지 제품 할인 -> 원하는 제품과 수량이 할인하는 날짜와 10일 연속으로 일치할 경우 맞추기
예) 바나나3, 사과2, 쌀2, 돼기고기2, 냄비1
    - 치킨, 사과, 사과, 바나나, 쌀, 사과, 돼지고기, 바나나, 돼지고기, 쌀, 냄비, 바나나, 사과, 바나나

1. want, number로 맵 객체 생성
2. discount -> 반복문 (i ~ i + 10으로  slice -> map의 값과 일치하는 경우 ++)
*/

const makeMap = (product, cnt) => {
  const map = new Map();
  for (let i = 0; i < product.length; i++) {
    map.set(product[i], cnt[i]);
  }
  return map;
};

const checkMapElements = (want, number, arr) => {
  const productMap = makeMap([...want], [...number]);
  for (let product of arr) {
    if (!productMap.has(product) || productMap.get(product) < 0) return false;
    productMap.set(product, productMap.get(product) - 1);
  }

  for ([key, value] of productMap) if (value < 0) return false;
  return true;
};

function solution(want, number, discount) {
  let count = 0;
  for (let i = 0; i <= discount.length - 10; i++) {
    const result = checkMapElements(want, number, discount.slice(i, i + 10));
    if (result) count++;
  }
  return count;
}

// map을 만들어서 풀 필요 없이 filter로 바로 비교할 수 있는 문제였다!
function solution(want, number, discount) {
  let count = 0;
  for (let i = 0; i < discount.length - 9; i++) {
    const slice = discount.slice(i, i + 10);

    let flag = true;
    for (let j = 0; j < want.length; j++) {
      if (slice.filter((item) => item === want[j]).length !== number[j]) {
        flag = false;
        break;
      }
    }
    if (flag) count += 1;
  }
  return count;
}
