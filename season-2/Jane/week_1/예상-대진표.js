/*
@ 풀이 방법 생각하기

예시 분석
A: 4, B: 7
1 2 3 4 5 6 7 8 
1 4 5 7 (다른 라운드 승자는 임의로 선정)
4 7 > 3
- 2명씩 분리했을 때 A와 B는 각각 (2페어, 4페어)(1페어, 2페어)에 위치한다.

A: 3, B: 9
1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16
1 3 5 7 9 11 13 15
3 7 9 13
3 9
- 2명씩 분리했을 때 A와 B는 각각 (2페어, 5페어)(1페어, 3페어)(1페어, 2페어)에 위치한다.

A: 1, B: 5
1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16
1 3 5 7 9 11 13 15
1 5 9 11 13
- 2명씩 분리했을 때 A와 B는 각각 (1페어, 3페어)(1페어, 2페어)에 위치한다.

A: 5, B: 27
1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 ... 31 32
1 3 5 7 9 11 13 15 ... 27 29 31
3 5 11 15 19 23 27 31
5 15 23 27
5 27
- 2명씩 분리했을 때 A와 B는 각각 (3페어, 14페어)(2페어, 7페어)(1페어, 4페어)(1페어, 2페어)에 위치한다.

1. 2명씩 분리했을 때 A와 B가 속한 페어의 값을 구한다.
  - 처음 페어의 위치는 Math.ceil(A와 B/2), cnt의 초기값은 1(만났을 때 라운드)
  - 두 페어의 값이 만나게 될 때까지 2로 나눈 뒤 올림한 값으로 변경하고, cnt를 증가시킨다.
  - 두 값이 같아지면 멈춘다.
  - cnt를 반환한다.
*/

const solution = (n, a, b) => {
  let pairA = a;
  let pairB = b;
  let cnt = 0;

  while (pairB !== pairA) {
    pairA = Math.ceil(pairA / 2);
    pairB = Math.ceil(pairB / 2);
    cnt++;
  }

  return cnt;
};

/*
@ 풀이하고 나서,,

- 처음에 무조건 A가 B보다 작을거라고 생각해서 에러가 발생했었다. 주어지지 않은 조건을 추정하고 있지 않은지 조심하자.
*/
