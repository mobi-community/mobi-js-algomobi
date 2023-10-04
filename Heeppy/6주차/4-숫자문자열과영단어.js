function solution(s) {
  const str = [
    "zero",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
  ];
  str.forEach((i, idx) => (s = s.replaceAll(i, idx)));
  return Number(s);
}

solution("2three45sixseven");
