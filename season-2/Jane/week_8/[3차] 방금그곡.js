/*
@ 풀이 방법 생각하기

- C, C#, D, D#, E, F, F#, G, G#, A, A#, B
- 1분에 1개씩 재생 (음악 길이보다 재생된 시간이 길 때는 음악이 끊김 없이 처음부터 반복해서 재생)
- 조건이 일치하는 음악이 여러 개일 때에는 라디오에서 재생된 시간이 제일 긴 음악 제목을 반환
- 조건이 일치하는 음악이 없을 때에는 “(None)”을 반환
- m: 네오가 기억한 멜로디를 담은 문자열
- musicinfos = ["음악 시작 시각(HH:MM), 음악 종료 시각(HH:MM), 음악 제목, 악보 정보"]

1. musicinfos 배열을 순회하며 곡 제목을 key로 갖고 재생시간만큼(종료 - 시작) 재생된 음을 담는 MAP 객체를 생성한다.
    - 시간 차를 구하기 위한 함수를 생성해야 한다. (시간 * 60 + 분)
    - (재생 시간 / 악보 길이)를 반올림한 값만큼 악보를 repeat한 뒤 재생 시간 만큼 자른다.
2. musicinfos를 순회하며 m을 includes하는 곡들을 추린다.
3. 그 중 가장 길이가 긴 음악을 반환한다. / 없을 경우 NONE 반환 

- 만약 네오가 기억한 음이 c로 끝나는 경우 includes 된다고 나오지만 뒤에 #이 붙어있지 않은지 검사해야 한다.

> 단순히 위와 같은 방식으로 풀이할 경우 #으로 인해 edge case가 너무 많이 발생하여 #이 포함된 경우 다른 글자로 치환하도록 풀이
*/

const formatIntoMinutes = (time) => {
  const [hour, minute] = time.split(":");
  return Number(hour) * 60 + Number(minute);
};

// 문제에는 B#이 있다는 언급이 없었으나 테스트코드에서 계속 틀려서 다른 사람들의 경우를 확인해보니 B#도 추가해야 했었다. ㅠ
const replaceHash = (s) =>
  s.replace(/(C|D|F|G|A|B)#/g, (_, a) => a.toLowerCase());

// map을 사용하지 않고 해당 배열에서 바로 풀었어도 가능했을 것 같다.
// 다른 풀이를 보니 padEnd라는 기능을 활용했으면 더 간단한 풀이가 가능했을 것으로 보인다.
const makeMusicMap = (musics) => {
  const musicMap = new Map();

  for ([start, end, title, score] of musics) {
    const playTime = formatIntoMinutes(end) - formatIntoMinutes(start);
    const removeHashScore = replaceHash(score);
    const repeat = removeHashScore.repeat(
      Math.ceil(playTime / removeHashScore.length)
    );
    const playSound = repeat.slice(0, playTime);
    musicMap.set(title, playSound);
  }

  return musicMap;
};

function solution(m, musicinfos) {
  const musics = musicinfos.map((music) => music.split(","));
  m = replaceHash(m);
  const musicMap = makeMusicMap(musics);
  const musicArr = [...musicMap];

  const result = musicArr.filter(([_, score]) => score.indexOf(m) >= 0);
  result.sort(
    ([title_a, score_a], [title_b, score_b]) => score_b.length - score_a.length
  );

  return result.length ? result[0][0] : "(None)";
}
