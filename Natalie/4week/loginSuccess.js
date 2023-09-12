//https://school.programmers.co.kr/learn/courses/30/lessons/120883

function solution(id_pw, db) {
  let foundId = false;
  let foundPw = false;

  for (let i = 0; i < db.length; i++) {
    const [id, pw] = db[i];

    if (id === id_pw[0]) {
      foundId = true;

      if (pw === id_pw[1]) {
        foundPw = true;
        break; // 아이디와 비밀번호가 일치하면 반복문 종료
      }
    }
  }

  if (foundId) {
    if (foundPw) {
      return "login";
    } else {
      return "wrong pw";
    }
  } else {
    return "fail";
  }
}
