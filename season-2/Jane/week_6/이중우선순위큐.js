/*
@ 풀이 방법 생각하기
[queue로 풀이해보자]
1. for문으로 operations를 반복한다.
2. 각 문자열을 split하여 0번째 값으로 수행해야 할 계산을 찾는다.
3. 만약 |일 경우 queue 배열에 1번째 값을 Number로 변환하여 삽입한다.
    - 삽입 시 0번째 값보다 작으면 unshift, 마지막 값보다 크면 push한다.
4. 만약 D일 경우 1번째 값에 따라 값을 삭제한다.
    - -1이면 shift, 1이면 pop
*/

const INSERT = (arr, value) => {
  if (value <= arr[0]) {
    arr.unshift(Number(value));
  } else {
    arr.push(Number(value));
    if (value < arr[arr.length - 2]) {
      arr = arr.sort((a, b) => a - b);
    }
  }
  return arr;
};

const DELETE = (arr, value) => {
  value > 0 ? arr.pop() : arr.shift();
  return arr;
};

function solution(operations) {
  let queue = [];

  for (let i = 0; i < operations.length; i++) {
    const [command, value] = operations[i].split(" ");
    if (command === "I") queue = INSERT(queue, value);
    else queue = DELETE(queue, value);
  }

  if (!queue.length) return [0, 0];
  return [queue[queue.length - 1], queue[0]];
}
