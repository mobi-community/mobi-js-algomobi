/*
@ 풀이 방법 생각하기
1. 배열의 각 문자열들을 head, number, tail로 나눈다.
    - 정규식을 사용하여 숫자가 나오기 전까지 head, 숫자 부분을 number, 그 뒤를 tail
    - tail은 비교에 사용되지 않으므로 number까지만 남겨도 될듯!
2. head를 기준으로 sort한다.
3. Number(NUMBER) 기준으로 sort한다.
4. 반환한다.
*/

const regex = {
  str: /\D+/g,
  num: /\d+/g,
};

const divideString = (str) => {
  const NUMBER = str.match(regex.num)[0];
  const index = str.indexOf(NUMBER);
  const head = str.substring(0, index);
  const tail = str.substring(index + NUMBER.length);
  return [head, NUMBER, tail];
};

function solution(files) {
  const answer = files.map((file) => divideString(file));
  answer.sort(([head_1, num_1], [head_2, num_2]) => {
    if (head_1.toLowerCase() === head_2.toLowerCase())
      return parseInt(num_1) - parseInt(num_2);
    return head_1.toLowerCase() > head_2.toLowerCase() ? 1 : -1;
  });
  return answer.map((w) => w.join(""));
}
