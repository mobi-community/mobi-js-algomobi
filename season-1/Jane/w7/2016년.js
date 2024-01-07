/*
[2016년]
2016년 1월 1일은 금요일입니다. 
2016년 a월 b일은 무슨 요일일까요? 
두 수 a ,b를 입력받아 2016년 a월 b일이 무슨 요일인지 리턴하는 함수, solution을 완성하세요. 
요일의 이름은 일요일부터 토요일까지 각각 SUN,MON,TUE,WED,THU,FRI,SAT입니다. 
예를 들어 a=5, b=24라면 5월 24일은 화요일이므로 문자열 "TUE"를 반환하세요.

- 2016년은 윤년입니다. (2월의 마지막 날은 2월 29일)
- 2016년 a월 b일은 실제로 있는 날입니다. (13월 26일이나 2월 45일같은 날짜는 주어지지 않습니다)
*/

// @ notes
/*
요일은 7일마다 반복된다!
각 월이 가지는 일수가 다르기 때문에 월별 일자 정리 -> 해당 날짜 사이의 일수 계산
*/

const solution = (month, day) => {
  const first = 4; // 1월 1일은 금요일 (12월 31일 값 넣기)
  const total = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  const date = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
  let sum = first;

  // (월+일)을 7로 나눈 나머지
  for (let i = 0; i < month - 1; i++) {
    sum += total[i];
  }

  sum += day;
  return date[sum % 7];
};

console.log(solution(5, 24));
