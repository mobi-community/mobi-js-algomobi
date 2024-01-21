/*
@ 풀이 방법 생각해보기
1. completion을 기준으로 for문 반복을 돌려 완주자 목록을 나타내는 해시 맵을 생성한다.
2. participant를 기준으로 for문 반복을 돌려 이름에 해당하는 값이 있을 경우 1을 뺀다.
3. 이름에 해당하는 키 값이 없거나 value 값이 0인 경우 해당 참가자의 이름을 반환한다.
*/

const makeHashMap = (arr) => {
  const hashMap = new Map();
  for (let i = 0; i < arr.length; i++) {
    if (hashMap.get(arr[i])) hashMap.set(arr[i], hashMap.get(arr[i]) + 1);
    else hashMap.set(arr[i], 1);
  }
  return hashMap;
};

function solution(participant, completion) {
  const hashmap = makeHashMap(completion);
  let uncompleted;

  participant.forEach((p) => {
    if (hashmap.has(p)) {
      if (hashmap.get(p) === 0) uncompleted = p;
      hashmap.set(p, hashmap.get(p) - 1);
    } else {
      console.log(p);
      uncompleted = p;
    }
  });

  return uncompleted;
}
