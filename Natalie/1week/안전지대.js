// https://school.programmers.co.kr/learn/courses/30/lessons/120866

/*
1. board의 길이를 구하자 => 정사각형의 2차원 배열이니까 board 의 길이 boardLength는 한변의 길이가 됨.
2. boardLength로 board의 크기 구하고, 반복문 돌려서 모든 칸을 확인해야함
- 각 행의 인덱스 : 0부터 n-1까지
- 각 열의 인덱스 : 0부터 n-1까지 
*/

function solution(board) {
  const boardLength = board.length; //한변의 길이
  let safeCount = 0; // 지뢰없는부분저장

  for (let i = 0; i < boardLength; i++) {
    for (let j = 0; j < boardLength; j++) {
      if (board[i][j] === 0) {
        // 현재 칸이 지뢰가 없는 칸인 경우
        let isSafe = true;
        for (let x = i - 1; x <= i + 1; x++) {
          for (let y = j - 1; y <= j + 1; y++) {
            if (
              x >= 0 &&
              x < boardLength &&
              y >= 0 &&
              y < boardLength &&
              board[x][y] === 1
            ) {
              isSafe = false; // 주변에 지뢰가 있는 경우 false처리
              break;
            }
          }
          if (!isSafe) {
            break;
          }
        }
        if (isSafe) {
          // 주변에 지뢰가 없는 경우
          safeCount++; // 안전한 칸 개수를 증가
        }
      }
    }
  }
  return safeCount;
}
