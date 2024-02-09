/*
@ 풀이 방법 생각하기
* 자카드 유사도
    - 둘 다 length === 0이면 1
    - A, B의 교집합.length / A, B의 합집합.length
    - 원소의 중복을 허용하는 다중 집합으로 확장 가능
> 반환값: Math.floor(result * 65536

1. 주어진 문자열들을 정규식을 사용하여 영문자만 남기고 모두 소문자로 만든다.
2. 각 문자열을 두 글자씩 끊어서 만들 수 있는 다중집합을 구한다.
3. 두 문자열 간 교집합과 합집합의 길이를 구한다.
4. 자카드 유사도를 구해 반환한다.
*/

const makeMultiSet = (str) => {
  const multiset = [];
  for (let i = 0; i < str.length - 1; i++) {
    const word = str[i].toLowerCase() + str[i + 1].toLowerCase();
    if (!word.match(/^[a-zA-Z]*$/g)) continue;
    multiset.push(word);
  }
  return multiset;
};

const getJaccard = (arr1, arr2) => {
  if (!arr1.length && !arr2.length) return 1;
  // 다중집합의 교집합
  const copiedA = [...arr1];
  const copiedB = [...arr2];
  const union = [];
  for (let i = 0; i < arr1.length; i++) {
    if (copiedA.includes(arr1[i]) && copiedB.includes(arr1[i])) {
      union.push(arr1[i]);
      copiedA.splice(
        copiedA.findIndex((w) => w === arr1[i]),
        1
      );
      copiedB.splice(
        copiedB.findIndex((w) => w === arr1[i]),
        1
      );
    }
  }
  // 교집합
  const intersection = copiedA.length + copiedB.length + union.length;
  return union.length / intersection;
};

function solution(str1, str2) {
  const word1 = makeMultiSet(str1);
  const word2 = makeMultiSet(str2);
  const jaccard = getJaccard(word1, word2);
  return Math.floor(jaccard * 65536);
}
