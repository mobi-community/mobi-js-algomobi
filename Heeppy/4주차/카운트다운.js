// 정수 start_num와 end_num가 주어질 때, start_num에서 end_num까지 1씩 감소하는 수들을 차례로 담은 리스트를 return 하도록 solution 함수를 완성하라

function Solution(start_num, end_num) {
  const arr = [];
  for (let i = start_num; i > end_num - 1; i--) {
    arr.push(i);
  }
  return answer;
}

Solution(10, 3);
