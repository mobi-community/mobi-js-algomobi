// 어떤 문자열에 대해서 접두사는 특정 인덱스까지의 문자열을 의미한다.
// 예를 들어 'banana'의 모든 접두사는 'b','ba','ban','bana' 입니다.
// 문자열 my_string과 is_prefix가 주어질 때, is_prefix가 my_string의 접두사라면 1을,
// 아니면 0을 return 하는 solution 함수 ㄱㄱ

function solution(my_string, is_prefix) {
  for (let i = 0; i <= my_string.length; i++) {
    if (my_string.slice(0, i) === is_prefix) {
      return 1;
    }
    if (i === my_string.length) {
      return 0;
    }
  }
}

solution("banana", "nan");
