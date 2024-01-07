// 두 정수 q,r과 문자열 code가 주어질 때,
// code의 각 인덱스를 q로 나누었을 때 나머지가 r인 위치의 문자를
// 앞에서부터 순서대로 이어 붙인 문자열을 return 하는 solution

// q=3, r=1, code = "qjnwezgrpirldywt"
// q j n w e z g r p i r l d y w t

// 1, 4, 7, 10, 13,

// jerry

function solution(q, r, code) {
  var str = "";
  for (let i = 0; i < code.length; i++) {
    if (i % q == r) {
      str += code[i];
    }
  }
  return str;
}

solution(3, 1, "qjnwezgrpirldywt");
