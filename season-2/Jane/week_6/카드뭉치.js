/*
@ 풀이 방법 생각하기
1. goal을 cards1이 includes 하는 값과 cards2가 includes하는 값으로 분리한다.
2. findIndex 등으로 순서가 일치하는지 확인한다.
3. cards1, cards보다 includes의 길이가 길거나 순서가 다른 경우 'no', 아니라면 'yes'를 반환한다.
*/

const isOrderMatch = (origin, target) => {
  if (origin.length < target.length) return false;
  if (origin.length === target.length) {
    return origin.every((w, i) => w === target[i]);
  } else {
    // 단어의 순서로 변형하기
    const arr = target.map((el) => origin.findIndex((w) => w === el));
    // 건너뛴 카드가 없도록 검사하기
    if (arr[0] !== 0) return false;
    return arr.every((order, i, originArr) => {
      if (!originArr[i - 1] && originArr[i - 1] !== 0)
        return originArr[i + 1] - order === 1;
      if (!originArr[i + 1] && originArr[i + 1] !== 0)
        return order - originArr[i - 1] === 1;
      return originArr[i + 1] - order === 1 && order - originArr[i - 1] === 1;
    });
  }
};

function solution(cards1, cards2, goal) {
  const c1 = goal.filter((w) => cards1.includes(w));
  const c2 = goal.filter((w) => cards2.includes(w));
  const result = isOrderMatch(cards1, c1) && isOrderMatch(cards2, c2);
  return result ? "Yes" : "No";
}
