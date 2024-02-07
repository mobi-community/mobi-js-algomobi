/*
@ 풀이 방법 생각하기
- 응모자 아이디 (알파벳 소문자 + 숫자) / 제재 아이디
- 당첨에서 제외되어야 할 제재 아이디 목록
1. 각 불량 사용자 아이디를 정규 표현식으로 변환하는 함수를 생성합니다.
2. 정규표현식 함수를 사용하여 각 불량사용자 목록에 일치하는 구성원을 찾습니다.
3. 가능한 경우의 수를 계산합니다. (중복되는 경우의 수는 존재하지 않음)
> 아이디 목록의 순서는 고려하지 않으므로 순열이 아닌 조합의 수를 구합니다.
*/

// 정규식 구하기
const handleRegExp = (str) => {
  let result = "^";
  let cnt = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === "*") {
      cnt++;
      if (str[i + 1] !== "*") {
        result += "\\w{" + cnt + "}";
        cnt = 0;
      }
    } else {
      result += str[i];
    }
  }
  result += "$";
  const reg = new RegExp(result);
  return reg;
};

// 조합 구하기
const getCombination = (arrays) => {
  function combine(index, current) {
    // 모든 배열을 확인한 경우 (현재 인덱스가 배열의 길이와 같아지면)
    if (index === arrays.length) {
      // 현재까지 선택된 요소들이 중복이 없는 경우에만 ([frodo, frodo, frodo] 방지)
      if (new Set(current).size === current.length) {
        result.push(current.slice());
      }
      return;
    }
    for (let value of arrays[index]) {
      // 해당 조건 추가하지 않으면 모든 정규식이 "********"인 경우 시간 초과 오류 발생
      if (current.includes(value)) continue;
      // 현재까지 검사한 값 더하고, 다음 인덱스에 해당하는 배열 호출
      combine(index + 1, current.concat(value));
    }
  }

  let result = [];
  combine(0, []); // 재귀적으로 검사
  const array = result.map((el) => JSON.stringify(el.sort()));
  const set = new Set(array);
  result = [...set];
  return result.length;
};

function solution(user_id, banned_id) {
  const matchList = [];
  for (let i = 0; i < banned_id.length; i++) {
    const target = handleRegExp(banned_id[i]);
    const matched = [];
    for (let user of user_id) {
      if (user.match(target)) matched.push(user);
    }
    matchList.push(matched);
  }

  const result = getCombination(matchList);
  return result;
}
