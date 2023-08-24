// https://school.programmers.co.kr/learn/courses/30/lessons/120876

// “선분을 긋는다” 라는 것은 1차원 배열과 집합으로 표현
// 즉 (0, 2)에 선분을 긋는다 = 인덱스 0부터 1까지 해당 선분을 집합 자료형에 기록

// start에 최초로 그려지는 선분의 시작점을,
// end에 마지막에그려지는 선분의 종단점을 입력해두고 그 차이만큼 0으로 채워진 리스트를 만들어준다.
// 이후 각 선분들의 길이를 idx에 대입하여 1씩 더해준다.
// 선분들을 다 더해주었을때 리스트에 2 이상인 부분들은 겹친부분이 된다.

function solution(lines) {
  const start = Math.min(...lines.flat());
  const end = Math.max(...lines.flat());
  const lst = [...Array(end - start)].fill(0);

  lines.forEach((el) => {
    for (let i = el[0]; i < el[1]; i++) {
      lst[i - start] += 1;
    }
  });
  return lst.reduce((a, c) => (c > 1 ? a + 1 : a), 0);
}
