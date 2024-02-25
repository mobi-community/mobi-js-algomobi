/*
@ 풀이 방법 생각해보기
1. 각 요소의 최소 인덱스를 찾아주는 함수를 구현한다.
    - findIndex를 사용하고 더 작은 인덱스가 있을 경우 교체한다.
    - 만약 원래 -1이었다가 인덱스가 존재할 경우에는 해당 값으로 대체되도록 예외 처리한다.
2. 문자열에 반복문을 걸어 각 문자열의 인덱스의 합을 구한다.
    - 다만 하나라도 -1이 나올 경우 합을 구하지 않고 -1로 간주한다.
3. 결과값을 반환한다.
*/

function solution(keymap, targets) {
  const getMinIndex = (target) => {
    let minIndex = -1;

    for (let i = 0; i < keymap.length; i++) {
      const newIndex = [...keymap[i]].findIndex((word) => word === target);
      if (newIndex < 0) continue;
      if (minIndex >= 0) minIndex = Math.min(minIndex, newIndex);
      else minIndex = newIndex;
    }

    return minIndex < 0 ? minIndex : minIndex + 1;
  };

  return targets.map((str) => {
    const indexArr = str.split("").map((word) => getMinIndex(word));
    if (indexArr.includes(-1)) return -1;
    return indexArr.reduce((sum, num) => sum + num);
  });
}
