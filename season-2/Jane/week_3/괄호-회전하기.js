/*
@ 풀이 방법 생각하기
1. 스택을 사용하여 문제를 풀이한다.
2. 조사할 문자열들을 담은 target 변수를 생성한다.
3. 열린 문자열을 만나면 stack 배열에 unshift한다.
4. 닫힌 문자열을 만났을 때 stack[0]과 짝을 이루면(객체로 인덱싱 가능) stack.shift()한다.
5. stack[0]이 짝을 이루지 못하거나 순회가 끝났는데 stack의 길이가 0이 아니면 return false
*/

const getTargets = (str) => {
  const result = [];
  for (let i = 0; i < str.length; i++) {
    result.push(str.slice(i + 1) + str.slice(0, i) + str.slice(i, i + 1));
  }
  return result;
};
function solution(s) {
  const bracket = {
    ")": "(",
    "}": "{",
    "]": "[",
  };
  const comb = getTargets(s);
  const len = s.length;
  let result = 0;
  for (let i = 0; i < comb.length; i++) {
    const stack = [];
    let flag = true;
    for (let j = 0; j < len; j++) {
      const t = comb[i][j];
      if (t === "(" || t === "{" || t === "[") {
        stack.push(t);
      } else {
        if (bracket[t] === stack.at(-1)) stack.pop();
        else flag = false;
      }
    }
    if (stack.length !== 0) flag = false;
    result += flag;
  }
  return result;
}
