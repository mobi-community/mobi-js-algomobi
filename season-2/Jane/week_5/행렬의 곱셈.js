/*
@ 풀이 방법 생각하기
1 4     3 3
3 2     3 3
4 1
[[1*3 + 4*3, 1*3 + 4*3], [3*3 + 2*3, 3*3 + 2*3], [4*3 + 1*3, 4*3 + 1*3]]
(0,0)(0,0) / (1,0)(0,1) / (0,0)(1,0) / (1,0)(1,1)
2 3 2       5 4 3
4 2 4       2 4 1
3 1 4       3 1 1
[[2*5 + 3*2 + 2*3]]
*/

function solution(arr1, arr2) {
  const result = [];
  for (let i = 0; i < arr1.length; i++) {
    const arr = [];
    for (let j = 0; j < arr2[0].length; j++) {
      let calc = 0;
      for (let k = 0; k < arr1[0].length; k++) {
        calc += arr1[i][k] * arr2[k][j];
      }
      arr.push(calc);
    }
    result.push(arr);
  }
  return result;
}
