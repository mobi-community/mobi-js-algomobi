// 랜덤으로 서로 다른 k개의 수를 저장한 배열
function solution(arr, k) {
  const set = (array) => [...new Set(array)];
  arr = set(arr).slice(0, 3);
  if (arr.length < k) {
    const num = k - arr.length;
    for (let i = 0; i < num; i++) {
      arr.push(-1);
    }
    return console.log(arr);
  } else return console.log(arr);
}

solution([3, 3], 4);

// 겹치는 수가 있으면
