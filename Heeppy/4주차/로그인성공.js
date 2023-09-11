// 머쓱이는 프로그래머스에 로그인하려고 합니다.
// 머쓱이가 입력한 아이디와 패스워드가 담긴 배열 id_pw와 회원들의 정보가 담긴 2차원 배열 db가 주어질 때, 다음과 같이 로그인 성공, 실패에 따른 메시지를 return하도록 solution 함수를 완성해 주세요.

// 아이디와 비밀번호가 모두 일치하는 회원정보가 있으면 'login'을 return
// 로그인이 실패했을 때 아이디가 일치하는 회원이 없다면 'fail'을 아이디는 일치하지만 비밀번호가 일치하는 회원이 없다면 'wrong pw'를 return

// id_pw : 입력한 ["meosseugi", "1234"]
// db : 회원 정보 :[["rardss", "123"], ["yyoom", "1234"], ["meosseugi", "1234"]]

function solution(id_pw, db) {
  //   for (let i = 0; i < db.length; i++) {
  //     // 아이디 일치
  //     if (db[i][0] == id_pw[0]) {
  //       // 비밀번호 일치
  //       if (db[i][1] == id_pw[1]) {
  //         return console.log("login");
  //       }
  //       // 비밀번호 불일치
  //       else if (db[i][1] !== id_pw[1]) {
  //         return console.log("wrong pw");
  //       }
  //     }
  //     // 아이디 불일치
  //     else if (db[i][0] !== id_pw[0]) {
  //       return console.log("fail");
  //     }
  //   }
  let answer = "";
  const [id, pw] = id_pw;

  db.map((list) => {
    if (list[0] === id) {
      if (list[1] === pw) {
        answer = "login";
      } else if (list[1] !== pw) {
        answer = "wrong pw";
      }
    }
    if (list[0] !== id && list[1] !== pw) {
      answer = "fail";
    }
  });
}

solution(
  ["meosseugi", "1234"],
  [
    ["rardss", "123"],
    ["yyoom", "1234"],
    ["meosseugi", "1234"],
  ]
);
