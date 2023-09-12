// /https://school.programmers.co.kr/learn/courses/30/lessons/1845?language=javascript

function solution(nums) {
  const uniqueNums = new Set(nums); // (중복 제거) 폰켓몬 종류 번호 구하기
  const maxSelect = nums.length / 2; // 선택할 수 있는 최대 폰켓몬 수

  // 만약 고를 수 있는 폰켓몬 종류가 최대 선택 가능 수보다 많다면,
  // 최대 선택 가능 수를 반환
  if (uniqueNums.size > maxSelect) {
    return maxSelect;
  } else {
    // 모든 종류의 폰켓몬을 선택 == uniqueNums의 크기를 반환
    return uniqueNums.size;
  }
}
