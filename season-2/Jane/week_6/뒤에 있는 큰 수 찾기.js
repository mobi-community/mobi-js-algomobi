/*
@ 풀이 방법 생각하기
- for문을 사용하여 반복을 돌린다. or map을 사용하여 변환한다.
- 이중 for문을 사용하여 뒤의 수 중 더 큰 수가 있다면 멈추고 해당 수를 return, 없다면 -1을 return한다.
- 만약 뒤의 수가 없어도 -1을 return한다.
> 해당 방식으로 풀이했더니 시간 초과 오류가 발생했다. 계산을 줄일 수 있는 방법이 필요해 보인다.

[수정한 풀이 방법]
1. 기본으로 -1이 담긴 배열을 생성한다. (answer)
2. 비교할 값을 담기 위한 배열을 추가로 생성한다. (compare)
3. 뒤에서부터 numbers에 대한 for문을 돌린다.
    - arr의 길이가 존재할 경우 arr의 값이 for문의 i로 인덱싱한 값보다 크게 될 때까지 pop으로 요소를 지운다.
    - 만약 값이 있다면 (arr의 길이가 0이 아니라면) 제일 위에 있는 값을 answer의 해당 인덱스의 값으로 넣는다.
4. stack에 for문의 i로 인덱싱한 값을 추가하여 다음 값과 비교할 수 있게 한다. 
*/

function solution(numbers) {
  const length = numbers.length;
  const result = Array.from({ length }, () => -1);
  const compare = [];

  for (let i = length - 1; i >= 0; i--) {
    const target = numbers[i];
    while (compare.length && target >= compare.at(-1)) compare.pop();
    if (compare.length) result[i] = compare.at(-1);
    compare.push(target);
  }

  return result;
}
