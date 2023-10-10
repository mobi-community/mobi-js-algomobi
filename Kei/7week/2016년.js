/*
2016년
문제 설명
2016년 1월 1일은 금요일입니다. 2016년 a월 b일은 무슨 요일일까요? 두 수 a ,b를 입력받아 2016년 a월 b일이 무슨 요일인지 리턴하는 함수, solution을 완성하세요. 요일의 이름은 일요일부터 토요일까지 각각 SUN,MON,TUE,WED,THU,FRI,SAT

입니다. 예를 들어 a=5, b=24라면 5월 24일은 화요일이므로 문자열 "TUE"를 반환하세요.

입출력 예
a	b	result
5	24	"TUE"
*/

/*
2016년 윤년 2월 29일까지 존재
1 - 31, 2 - 29, 3 - 31, 4 - 30, 5 - 31, 6 - 30, 7 - 31, 8 - 31, 9 - 30, 10 - 31, 11 - 30, 12 - 31
금요일부터 시작 (SUN, MON, TUE, WED, THU, FRI, SAT,)
*/

// 1. Date 함수 사용
function solution(a, b) {
  return new Date(2016, a - 1, b).toString().slice(0, 3).toUpperCase();
}

// 2. 일반 로직
function solution(a, b) {
  const weekDays = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
  const monthDays = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

  let day = b + 4; // 2016년은 1월 1일이 금요일이므로 월요일 + 4인 금요일

  // a - 1월까지의 일수 + day
  for (let i = 0; i < a - 1; i++) {
    // 배열은 0부터 시작하므로 -1 5월 -> 4
    day += monthDays[i]; // 28 + 31 + 29 + 31 + 30
  }

  return weekDays[day % 7]; // 149 % 7 = 2
}

console.log(solution(5, 24));
