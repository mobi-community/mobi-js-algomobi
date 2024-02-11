/*
@ 풀이 방법 생각하기
* LRU 알고리즘이란?
    - 가장 오랫동안 참조되지 않은 페이지를 교체
    - 가장 최근에 사용한 아이템부터 가장 적게 사용한 아이템까지 정렬
- 이미 캐시에 있다면 해당 값을 맨 앞으로 가져오고 나머지 빈자리를 하나씩 밀어 채운다.
- 캐시에 없다면 맨 앞에 하나를 추가한다.
- 캐시가 가득 찼을 경우 제일 뒤에 있던 값을 삭제한 뒤 맨 앞에 하나를 추가한다.
*Cache Hit 이란?
    - CPU가 참조하고자 하는 메모리가 캐시에 존재하고 있을 경우
* Cache Miss란?
    - CPU가 참조하고자 하는 메모리가 캐시에 존재하지 않을 경우
    
- 대소문자를 구분하지 않으므로 모두 toLowerCase()를 적용한 뒤 진행한다.
- 이미 메모리가 존재할 경우 1, 존재하지 않아 새로 추가할 경우 5로 잡고 계산한다.
*/

function solution(cacheSize, cities) {
  let result = 0;
  let cache = [];

  // cache 크기가 0인 경우
  if (cacheSize === 0) return cities.length * 5;

  for (let i = 0; i < cities.length; i++) {
    const value = cities[i].toLowerCase();
    if (cache.includes(value)) {
      // cache hit
      result += 1;
      cache = cache.filter((el) => el !== value);
      cache.unshift(value);
    } else {
      // cache miss
      result += 5;
      // 캐시가 가득 찬 경우
      if (cache.length === cacheSize) cache.pop();
      cache.unshift(value);
    }
  }
  return result;
}
