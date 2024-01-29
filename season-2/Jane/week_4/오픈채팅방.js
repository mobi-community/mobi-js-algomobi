/*
@ 풀이 방법 생각해내기
1. 유저 아이디와 닉네임을 map 객체를 사용하여 관리합니다.
2. 유저 아이디가 이미 map의 key로 존재하면 해당 닉네임을 바꾸고, 없다면 추가합니다.
3. 결과 배열에 record를 변환한 값을 담습니다. 
*/

const Command = {
  Enter: "들어왔습니다.",
  Leave: "나갔습니다.",
};

const getNameMap = (arr) => {
  const nameMap = new Map();

  for ([_, id, nickname] of arr) {
    if (!nickname) continue;
    if (nameMap.get(id) !== nickname) nameMap.set(id, nickname);
    else continue;
  }
  return nameMap;
};

function solution(record) {
  const splitRecord = record.map((rec) => rec.split(" "));

  const nameMap = getNameMap(splitRecord);

  const result = [];
  for ([command, id, nickname] of splitRecord) {
    if (!Command[command]) continue;
    result.push(`${nameMap.get(id)}님이 ${Command[command]}`);
  }
  return result;
}
