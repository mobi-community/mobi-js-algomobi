// 배열 arr가 주어집니다.
// 배열 arr의 각 원소는 숫자 0부터 9까지로 이루어져 있습니다.
// 이때 배열 arr에서 연속적으로 나타나는 숫자는 하나만 남기고 전부 제거하려고 한다.
// 단, 제거된 후 남은 수들을 반환할 때는 배열 arr의 원소들의 순서를 유지해야 한다.

function solution(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == arr[i + 1]) {
      arr.splice(i, 1, "_");
    }
  }
  const _arr = arr.filter((v) => v !== "_");
  return _arr;
}

solution([1, 1, 3, 3, 0, 1, 1]);

// ** 한줄짜리 코드
function solution2(arr) {
  return arr.filter((value, index) => value !== arr[index - 1]);
}
