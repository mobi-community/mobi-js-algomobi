function solution(myStr) {
  var s = myStr.indexOf("a");
  var e = myStr.indexOf("b");
  var c = myStr.indexOf("c");
  var res = myStr.substring(s, e, c);
  console.log(res);
  return;
}

/**
 * 1. a,b,c가 들어있는 인덱스 번호를 찾는다.
 *
 *
 */
