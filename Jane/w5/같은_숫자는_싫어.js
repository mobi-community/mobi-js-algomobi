/*
[같은 숫자는 싫어]
배열 arr가 주어집니다. 
배열 arr의 각 원소는 숫자 0부터 9까지로 이루어져 있습니다. 
이때, 배열 arr에서 연속적으로 나타나는 숫자는 하나만 남기고 전부 제거하려고 합니다. 
단, 제거된 후 남은 수들을 반환할 때는 배열 arr의 원소들의 순서를 유지해야 합니다. 

예를 들면,
arr = [1, 1, 3, 3, 0, 1, 1] 이면 [1, 3, 0, 1] 을 return 합니다.
arr = [4, 4, 4, 3, 3] 이면 [4, 3] 을 return 합니다.
배열 arr에서 연속적으로 나타나는 숫자는 제거하고 남은 수들을 return 하는 solution 함수를 완성해 주세요.
*/

// 방법 1
// 효율성 테스트: 24.74ms - 28.09ms
const solution1 = (arr) => arr.filter((_, i, arr) => arr[i] !== arr[i - 1]);

// console.log(solution1([1, 1, 3, 3, 0, 1, 1]));
// console.log(solution1([4, 4, 4, 3, 3]));

// ===============================================================================

// 방법 2
// 효율성 테스트: 11.82ms - 34.27ms
const solution2 = (arr) => {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== arr[i - 1]) {
      result.push(arr[i]);
    }
  }

  return result;
};

// console.log(solution2([1, 1, 3, 3, 0, 1, 1]));
// console.log(solution2([4, 4, 4, 3, 3]));

// 기본 for문이 더 빠를까 궁금해서 두 방법을 사용해봤는데 시간은 비슷한데 고차함수가 가독성이 더 좋아서
// 고차함수를 쓸듯!
