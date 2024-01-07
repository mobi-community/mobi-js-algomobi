/*
[세 개의 구분자]
임의의 문자열이 주어졌을 때 문자 "a", "b", "c"를 구분자로 사용해 문자열을 나누고자 합니다.

예를 들어 주어진 문자열이 "baconlettucetomato"라면 나눠진 문자열 목록은 ["onlettu", "etom", "to"] 가 됩니다.

문자열 myStr이 주어졌을 때 위 예시와 같이 "a", "b", "c"를 사용해 나눠진 문자열을 순서대로 저장한 배열을 return 하는 solution 함수를 완성해 주세요.

단, 두 구분자 사이에 다른 문자가 없을 경우에는 아무것도 저장하지 않으며, return할 배열이 빈 배열이라면 ["EMPTY"]를 return 합니다.  
*/

// @ notes > 고차함수 쓰기, 정규표현식 쓰기

// 정규표현식으로 풀이하기
// match: 문자열에서 정규표현식에 매칭되는 항목들을 배열로 반환
const solution = (myStr) => myStr.match(/[^abc]+/g) || ["EMPTY"];

// 고차함수로 풀이하기 > 너무 오래 걸린다..!😢
const solution_1 = (myStr) => {
  const result = myStr
    .split("a")
    .map((arr) => arr.split("b"))
    .flat()
    .map((arr) => arr.split("c"))
    .flat()
    .filter((el) => el);

  return result.length ? result : ["EMPTY"];
};

// 정규표현식 어려워서 고차함수로 꾸역꾸역 해보려다가,,
// 가독성도 구린데 40초 걸리는 걸 보고,,, 정규표현식 문법을 써봤다 ^__^
/*
[^abc]뒤에 +를 안 써주면 [^abc] 중 하나를 제외한 단일 문자열과만 일치하게 된다.
따라서 +를 빼먹고 사용했을 때에는 한 글자씩 배열에 담겨 반환되었다.

+를 써주면 문자를 제외한 어떤 문자열과도 일치가 되므로 연속된 글자들과 매칭된다.
*/
console.log(solution("baconlettucetomato"));
console.log(solution("abcd"));
console.log(solution("cabab"));
