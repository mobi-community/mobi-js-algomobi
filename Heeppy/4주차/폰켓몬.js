// N/2 마리를 잡아야 하는데,

function solution(nums) {
  var num = nums.length / 2;
  const set = (array) => [...new Set(array)];
  // num보다 set2.length가 더 클때
  if (set(nums).length >= num) {
    return num;
  }
  // num이 set2.length보다 클 때
  else {
    return set(nums).length;
  }
}
solution([3, 1, 2, 3]);
solution([3, 3, 3, 2, 2, 4]);
solution([3, 3, 3, 2, 2, 2]);
