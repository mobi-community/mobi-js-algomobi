/*
[겹치는 선분의 길이]
선분 3개가 평행하게 놓여 있습니다. 
세 선분의 시작과 끝 좌표가 [[start, end], [start, end], [start, end]] 형태로 들어있는 
2차원 배열 lines가 매개변수로 주어질 때, 
두 개 이상의 선분이 겹치는 부분의 길이를 return 하도록 solution 함수를 완성해보세요.
*/

function solution(lines) {
  // 배열의 길이를 구해주는 함수
  const getLength = (array) => array[1] - array[0] + 1;

  // 시작점, 끝점으로 배열 생성하는 함수
  const makeArray = (array) =>
    Array.from({ length: getLength(array) }, (_, i) => array[0] + i);

  // 1. 시작점과 끝점 사이의 값을 모두 담은 배열로 변환
  const newArr = lines.map((arr) => makeArray(arr));

  const overlap = [];

  // 두 배열에서 연속되는 값이 겹치는 부분이 있는지 검사해주는 함수
  const findOverlap = (arr1, arr2) => {
    for (let i = 0; i < arr1.length; i++) {
      if (
        arr2.includes(arr1[i]) &&
        arr1.includes(arr1[i] + 1) &&
        arr2.includes(arr1[i] + 1)
      ) {
        overlap.push(arr1[i]);
      }
    }
  };

  // 2. 겹치는 부분을 검사하여 overlap 배열에 담아주기
  findOverlap(newArr[0], newArr[1]);
  findOverlap(newArr[0], newArr[2]);
  findOverlap(newArr[1], newArr[2]);

  // 3. 중복 제거
  const filteredArr = new Set(overlap);
  console.log(filteredArr);
  return filteredArr.size;
}

// @ notes
/*
[어떻게 풀 수 있을까]
입출력 예 1
0 1 
    2 3 4 5
      3 4 5 6 7 8 9

3, 4, 5가 겹치므로 2 return

입출력 예 2
-1 0 1
     1 2 3
         3 4 5 6 7 8 9

입출력 예 3
0 1 2 3 4 5
      3 4 5 6 7 8 9
  1 2 3 4 5 6 7 8 9 10

1, 2, 3, 4, 5, 6, 7, 8, 9가 겹치므로 8 return

- lines의 각 요소를 Array.from 등으로 배열로 풀기
- 가장 작은 수 ~ 가장 큰 수까지의 범위를 갖는 반복문을 사용해서 세 개의 배열을 순회하기
- 각 인덱스 값을 포함할 경우 숫자 더해주기
- 숫자가 2 이상인 값의 다음 값도 숫자가 2 이상이라면 겹치는 부분의 길이 + 1
(입출력 예 2의 경우 1, 3이 두 번씩 있지만 2, 4는 한 번만 존재하므로 겹치는 부분으로 치지 않기 때문) 
*/

/*
  [오답 노트]
  테스트 케이스 3, 7, 9번 실패
  
  반례 1 (기댓값: 2, 현재 출력값: 3)
  4 5 6 7
  4 5
      6 7
  
  반례 2 (기댓값: 0 현재 출력값: 1)
  1 2
    2 3
      3 4
  
  반례 3 (기댓값: 2, 현재 출력값: 3)
           0 1 2
  -3 -2 -1
     -2 -1 0 1
  
  반례 4 (기댓값: 2, 현재 출력값: 1)
  -3 -2 -1
     -2 -1 0 1 2 3
               2 3
  
  반례 5 (기댓값: 4, 현재 출력값: 5)
  -3 -2 -1
     -2 -1 0 1 2 3
           0 1 2 3
  */

/*
  // flatMap을 사용하여 한 번에 합친 후 중복을 제거하려 해서 테스트 케이스를 통과하지 못했음
    const forDelete = newArr
      .map((el) => {
        if (el.length === 2) return el[1];
        return;
      })
      .filter((el) => el)
      .map((el) => {
        flatArr.pop(el);
        return el;
      });
  
    const filteredArr = flatArr.filter((el, i) => flatArr.indexOf(el) !== i);
  
    // 연속된 값이 있는 경우만 남기기
    const isNextNumArr = filteredArr.filter(
      (el, i) => filteredArr[i + 1] === el + 1
    );
  
  */
