/*
@ 풀이 방법 생각하기
1. 섞은 값을 담는 배열과 scoville 지수를 정렬한 배열을 생성한다.
2. 두 배열 중 하나라도 요소가 존재하고 섞을 값이 남아있을 때까지 while문을 돌린다.
    - 반복문이 돌아갈 때마다 섞는 횟수 (answer) ++
3. 만약 두 배열의 요소를 더했을 때 2보다 작다면 (더할 값이 없다면) -1 반환
4. 더해야 할 값을 food로 두고 길이가 2인 for문 반복을 돌린다.
    - 만약 섞은 값의 배열과 scoville 지수 배열 둘 다 요소가 남았다면 둘 중 더 작은 값을 사용한다.
    - 섞은 값이 존재하지 않는다면 scoville에서만 값을 꺼낸다.
    - scoville 지수 값이 남아있지 않다면 mix에서만 값을 꺼낸다.
    > mix에 이를 사용해 계산한 값을 넣는다.
5. 두 배열 모두의 길이가 0이 되거나 두 배열에 남은 값이 모두 K보다 커지면 멈춘다.
@ 풀이하고 나서,,
- 그놈의 스코빌 지수,, 
- 아래의 방식으로 테스트는 모두 통과했으나 시간 초과가 걸렸다.
- sort를 매번 돌려서 시간이 초과되는 것은 이해했으나 다른 방식으로는 도저히 풀 수가 없어서 정답 코드를 보았는데 
  절대 혼자 못 풀었을 것 같다,,^^ 
*/
function solution(S, K) {
  let answer = 0;
  const mix = [];
  S.sort((a, b) => a - b);
  const sco = [...S];

  while ((sco.length > 0 && sco[0] < K) || (mix.length > 0 && mix[0] < K)) {
    answer++;

    if (sco.length + mix.length <= 1) {
      return -1;
    }

    const food = [0, 0];
    for (let a = 0; a < 2; a++) {
      if (sco.length > 0 && mix.length > 0) {
        if (sco[0] < mix[0]) {
          food[a] = sco.shift();
        } else {
          food[a] = mix.shift();
        }
      } else if (sco.length > 0) {
        food[a] = sco.shift();
      } else {
        food[a] = mix.shift();
      }
    }

    mix.push(food[0] + food[1] * 2);
  }

  return answer;
}

/*
@ 정답 코드
*/
class MinHeap {
  constructor() {
    // heap 배열을 초기화한다.
    this.heap = [];
  }
  // 현재 heap의 크기를 반환한다.
  size() {
    return this.heap.length;
  }
  // 배열 내에서 idx1과 idx2에 해당하는 값을 서로 교체한다.
  swap(idx1, idx2) {
    [this.heap[idx1], this.heap[idx2]] = [this.heap[idx2], this.heap[idx1]];
    return this.heap;
  }
  // 주어진 자식 노드의 인덱스로부터 해당 자식의 부모 노드의 인덱스를 계산하여 반환한다.
  // 부모 노드 인덱스 = (자식 노드 인덱스 - 1)/2
  getParentIdx(childIdx) {
    return Math.floor((childIdx - 1) / 2);
  }
  // 왼쪽 자식 노드 인덱스 = 부모 노드 인덱스 * 2 + 1
  getLeftChildIdx(parentIdx) {
    return parentIdx * 2 + 1;
  }
  // 오른쪽 자식 노드 인덱스 = 부모 노드 인덱스 * 2 + 2
  getRightChildIdx(parentIdx) {
    return parentIdx * 2 + 2;
  }
  // 최소 힙에서 가장 작은 값을 제거하고 반환한다.
  heappop() {
    const heapSize = this.size();
    if (!heapSize) return null;
    if (heapSize === 1) return this.heap.pop();

    const value = this.heap[0];
    this.heap[0] = this.heap.pop();
    this.bubbledown(); // 힙 속성 유지를 위한 메서드 호출
    return value;
  }
  // value를 최소 힙에 추가한다.
  heappush(value) {
    this.heap.push(value);
    this.bubbleup(); // 힙 속성 유지를 위한 메서드 호출

    return this.heap;
  }
  // 힙에 새로운 원소가 추가되면 해당 원소가 힙 속성을 만족하도록 부모 노드와의 비교를 통해 위치를 조정한다.
  bubbleup() {
    let child = this.size() - 1;
    let parent = this.getParentIdx(child);

    while (this.heap[child] < this.heap[parent]) {
      this.swap(child, parent);
      child = parent;
      parent = this.getParentIdx(parent);
    }
  }
  // 힙에 새로운 원소가 제거되면 해당 원소가 힙 속성을 만족하도록 자식 노드와의 비교를 통해 위치를 조정한다.
  bubbledown() {
    let parent = 0;
    let leftChild = this.getLeftChildIdx(parent);
    let rightChild = this.getRightChildIdx(parent);

    while (
      (leftChild <= this.size() - 1 &&
        this.heap[leftChild] < this.heap[parent]) ||
      (rightChild <= this.size() - 1 &&
        this.heap[rightChild] < this.heap[parent])
    ) {
      if (
        rightChild <= this.size() - 1 &&
        this.heap[leftChild] > this.heap[rightChild]
      ) {
        this.swap(parent, rightChild);
        parent = rightChild;
      } else {
        this.swap(parent, leftChild);
        parent = leftChild;
      }
      leftChild = this.getLeftChildIdx(parent);
      rightChild = this.getRightChildIdx(parent);
    }
  }
}

function solution(scoville, K) {
  let count = 0;
  // 새로운 heap 인스턴스를 생성한다.
  const heap = new MinHeap();
  // scoville의 각 값에 대해 heap의 heappush 연산을 수행한다.
  scoville.forEach((el) => heap.heappush(el));

  // 만약 heap의 첫 번째 값이 K보다 작고, heap의 크기는 존재한다면
  while (heap.heap[0] < K && heap.size() > 1) {
    // 섞는 횟수 ++
    count++;
    // 더할 값들을 빼내서 heappush 연산을 수행한다.
    heap.heappush(heap.heappop() + heap.heappop() * 2);
  }
  // 만약 heap의 값들이 모두 K보다 커서 종료된 경우 count를 반환한다.
  // 만약 heap에서 더할 수 있는 경우의 수가 없어 종료된 것이라면 -1을 반환한다.
  return heap.heap[0] >= K ? count : -1;
}
