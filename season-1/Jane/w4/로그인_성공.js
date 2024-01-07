/*
[로그인 성공?]
머쓱이는 프로그래머스에 로그인하려고 합니다. 
머쓱이가 입력한 아이디와 패스워드가 담긴 배열 id_pw와 회원들의 정보가 담긴 2차원 배열 db가 주어질 때, 
다음과 같이 로그인 성공, 실패에 따른 메시지를 return하도록 solution 함수를 완성해주세요.

1. 아이디와 비밀번호가 모두 일치하는 회원정보가 있으면 "login"을 return합니다.
2. 로그인이 실패했을 때 아이디가 일치하는 회원이 없다면 “fail”를, 
   아이디는 일치하지만 비밀번호가 일치하는 회원이 없다면 “wrong pw”를 return 합니다.
*/

// @ notes 어떻게 풀 수 있을까?
// 1. isLogin, isId 함수 만들어서 각각 검사
// 2. 각 값을 검사하다가 조건 일치하는 경우 return
// 3. 각 조건 일치할 때마다 cnt 증가 > cnt에 대한 조건식까지 추가될 것 같아서 2번 방법으로 통일

// 2번 방법 (0.05ms - 0.20ms)
const solution = (input, db) => {
  const [id, pw] = input;
  let result = "fail";
  for (const user of db) {
    if (id === user[0]) result = "wrong pw";
    if (id === user[0] && pw === user[1]) result = "login";
  }
  return result;
};

// 1번 방법 (0.06ms - 0.09ms)
const isLogin = (input, db) =>
  db.findIndex((el) => {
    const [id, pw] = input;
    return id === el[0] && pw === el[1];
  }) >= 0;

const isId = (input, db) =>
  db.findIndex((el) => {
    const [id, pw] = input;
    return id === el[0] && pw !== el[1];
  }) >= 0;

const solution_1 = (input, db) => {
  if (isLogin(input, db)) return "login";
  if (isId(input, db)) return "wrong pw";
  return "fail";
};

// map을 사용해서 풀이하는 방법
const map_sol = (input, id) => {
  const [id, pw] = input;
  // id를 key, pw를 value로 갖는 map 객체 생성
  // 💡 배열을 map으로 만드는 것 기억하기
  const map = new Map(db);
  // id와 일치하는 key 값이 있는 경우 찾기
  // id로 가져온 value가 pw와 일치하는지 찾기
  return map.had(id) ? (map.get(id) === pw ? "login" : "wrong pw") : "fail";
};

console.log(
  solution(
    ["meosseugi", "1234"],
    [
      ["rardss", "123"],
      ["yyoom", "1234"],
      ["meosseugi", "1234"],
    ]
  )
);

console.log(
  solution(
    ["programmer01", "15789"],
    [
      ["programmer02", "111111"],
      ["programmer00", "134"],
      ["programmer01", "1145"],
    ]
  )
);

console.log(
  solution(
    ["rabbit04", "98761"],
    [
      ["jaja11", "98761"],
      ["krong0313", "29440"],
      ["rabbit00", "111333"],
    ]
  )
);
