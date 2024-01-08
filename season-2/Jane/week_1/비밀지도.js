// 프로그래머스 level-1 비밀지도 / 풀이 소요 시간 25분 (정답룔 69%)

/*
@ 풀이 방법 생각하기
1. map으로 각 배열의 수를 이진수로 변환한다.
- toString을 사용하되 이진수의 길이가 n과 같아야 하므로 빈 앞 부분을 0으로 채워야 한다.
2. 길이가 n이고 #으로 채워진 배열 n개를 담은 결과 배열을 생성한다.
3. for문으로 arr1, arr2를 순회하며 이진수 값 중 하나라도 false가 되는 경우 공백(" ")으로 바꾼다.
4. map으로 각 배열을 문자열로 합친 결과 배열을 반환한다.
*/

// 이진수 변환 함수
// @ 어차피 길이가 len과 같으면 '0'을 반복하는 횟수가 0이 되었을 것이므로 조건식에 넣어줄 필요는 없었던 것 같다.
const makeBinary = (len, num) => {
  let binary = num.toString(2);
  if (binary.length < len) binary = "0".repeat(len - binary.length) + binary;

  return binary;
};

function solution(n, arr1, arr2) {
  const map1 = arr1.map((el) => makeBinary(n, el));
  const map2 = arr2.map((el) => makeBinary(n, el));
  const result = Array.from({ length: n }, () => "#".repeat(n).split(""));

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      // 둘 다 공백일 때만 변경
      if (map1[i][j] === "0" && map2[i][j] === "0") result[i][j] = " ";
    }
  }

  return result.map((el) => el.join(""));
}

/*
@ 풀고 나서,,

다른 사람의 풀이를 보고 정규 표현식과 비트 연산자 공부의 필요성을 느꼈다..!
이중 for문까지 갈 필요 없이 | 하나로 해결되는 문제였다.
*/

/*
👩‍🏫 비트 OR (|) 연산자
- 두 이진수 비트 중 하나라도 1이면 해당 비트를 1로 설정한다. (각 비트는 개별적으로 처리된다.)
- 예를 들어, v는 5(101)이고 arr2[i]는 3(011)일 때, 두 이진수에 대해 비트 OR 연산을 수행하면 
  각 비트 위치에서 하나라도 1이면 1이 되고, 둘 다 0일 때만 0이 되므로 111이 된다.
*/
// 이진수의 각 자리를 검사해 1은 #으로, 0은 공백으로 변환한다.
function solution(n, arr1, arr2) {
  return arr1.map((v, i) =>
    addZero(n, (v | arr2[i]).toString(2)).replace(/1|0/g, (a) =>
      +a ? "#" : " "
    )
  );
}

// 두 지도를 합쳐 생성된 이진수의 길이를 n과 같게 만들어 주는 함수
const addZero = (n, s) => {
  return "0".repeat(n - s.length) + s;
};
