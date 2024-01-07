/*
로그인 성공?
문제 설명
머쓱이는 프로그래머스에 로그인하려고 합니다. 머쓱이가 입력한 아이디와 패스워드가 담긴 배열 id_pw와 회원들의 정보가 담긴 2차원 배열 db가 주어질 때, 다음과 같이 로그인 성공, 실패에 따른 메시지를 return하도록 solution 함수를 완성해주세요.

아이디와 비밀번호가 모두 일치하는 회원정보가 있으면 "login"을 return합니다.
로그인이 실패했을 때 아이디가 일치하는 회원이 없다면 “fail”를, 아이디는 일치하지만 비밀번호가 일치하는 회원이 없다면 “wrong pw”를 return 합니다.

입출력 예
id_pw	db	result
["meosseugi", "1234"]	[["rardss", "123"], ["yyoom", "1234"], ["meosseugi", "1234"]]	"login"
["programmer01", "15789"]	[["programmer02", "111111"], ["programmer00", "134"], ["programmer01", "1145"]]	"wrong pw"
["rabbit04", "98761"]	[["jaja11", "98761"], ["krong0313", "29440"], ["rabbit00", "111333"]]	"fail"
*/

/*
db에 id_pw가 모두 일치하면 return 'login'
id_pw중 0번 요소만 일치하면 return 'wrong pw'
id_pw 0번 요소가 없다면 return 'fail' 
*/

function solution(id_pw, db) {
  const result = db.map((v, i) => {
    if (v[0] === id_pw[0] && v[1] === id_pw[1]) return "login";
    if (v[0] === id_pw[0] && v[1] !== id_pw[1]) return "wrong pw";
    else return "fail";
  });

  if (result.includes("login")) return "login";
  if (result.includes("wrong pw")) return "wrong pw";
  else return "fail";
}

// 초기 코드에서 리팩터링
function solution(id_pw, db) {
  let result = "fail";
  db.map((v) => {
    if (v[0] === id_pw[0] && v[1] === id_pw[1]) result = "login";
    else if (v[0] === id_pw[0] && v[1] !== id_pw[1]) result = "wrong pw";
  });

  return result;
}

// 다른 사람 풀이
function solution(id_pw, db) {
  const [id, pw] = id_pw; // 배열 구조 분해 할당 key, value
  const map = new Map(db);
  console.log("map", map);
  return map.has(id) ? (map.get(id) === pw ? "login" : "wrong pw") : "fail"; // 먼저 map에 id값 있는지 확인하여 1차 필터링, map.get(id) -> key에 해당하는 value를 반환
}

console.log(
  solution(
    ["meosseugi", "1234"],
    [
      ["rardss", "123"],
      ["yyoom", "1234"],
      ["meosseugi", "1234"],
    ]
  )
); // 'login'

console.log(
  solution(
    ["programmer01", "15789"],
    [
      ["programmer02", "111111"],
      ["programmer00", "134"],
      ["programmer01", "1145"],
    ]
  )
); // 'wrong pw'

console.log(
  solution(
    ["rabbit04", "98761"],
    [
      ["jaja11", "98761"],
      ["krong0313", "29440"],
      ["rabbit00", "111333"],
    ]
  )
); // 'fail'
