// https://school.programmers.co.kr/learn/courses/30/lessons/181843

function solution(my_string, target) {
  if (target.length === 0) {
    return 1;
  }

  if (target.length > my_string.length) {
    return 0;
  }

  // my_string을 순회
  for (let i = 0; i <= my_string.length - target.length; i++) {
    let isSubstring = true;
    for (let j = 0; j < target.length; j++) {
      if (my_string[i + j] !== target[j]) {
        isSubstring = false;
        break;
      }
    }
    if (isSubstring) {
      return 1;
    }
  }

  return 0;
}
