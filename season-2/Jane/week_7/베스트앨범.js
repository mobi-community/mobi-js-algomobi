/*
@ 풀이 방법 생각하기
1. 장르의 누적합이 담긴 해시맵을 생성합니다.
2. 각 곡의 정보가 담긴 해시맵을 생성합니다. (key는 고유 번호, 장르와 재생 횟수를 value로 가집니다.)
3. 정보맵을 규칙에 따라 정렬합니다. (속한 노래가 많이 재생된 장르 > 장르 내에서 많이 재생된 노래 > 고유 번호가 낮은 노래)
4. 각 곡의 idx만 담은 배열을 반환합니다.
    - 이때 장르별로 가장 많이 재생된 노래는 최대 두 개까지만 담기므로 두 개가 넘는 장르는 뒤의 곡들을 삭제합니다.
*/
const makeGenreMap = (genres, plays) => {
  const genreMap = new Map();
  for (let i = 0; i < genres.length; i++) {
    if (genreMap.has(genres[i])) {
      const previous = genreMap.get(genres[i]);
      genreMap.set(genres[i], previous + plays[i]);
    } else {
      genreMap.set(genres[i], plays[i]);
    }
  }
  return genreMap;
};

const makeInfoMap = (genres, plays) => {
  const infoMap = new Map();
  for (let i = 0; i < genres.length; i++) {
    infoMap.set(i, [genres[i], plays[i]]);
  }
  return infoMap;
};

const handleBestSongs = (songs) => {
  const bestSongs = new Map();
  for (let [idx, [genre, _]] of songs) {
    if (bestSongs.get(genre) && bestSongs.get(genre).length === 2) continue;
    if (bestSongs.get(genre)) {
      const previous = bestSongs.get(genre);
      bestSongs.set(genre, [...previous, idx]);
    } else {
      bestSongs.set(genre, [idx]);
    }
  }
  return bestSongs;
};

function solution(genres, plays) {
  const genreMap = makeGenreMap(genres, plays);
  const infoMap = [...makeInfoMap(genres, plays)];
  infoMap.sort(([idx_a, [genre_a, play_a]], [idx_b, [genre_b, play_b]]) => {
    // 고유 번호가 낮은 노래
    if (genre_a === genre_b && play_a === play_b) return idx_a - idx_b;
    // 장르 내에서 많이 재생된 노래
    if (genre_a === genre_b) return play_b - play_a;
    // 속한 노래가 많이 재생된 장르
    return genreMap.get(genre_b) - genreMap.get(genre_a);
  });
  return [...handleBestSongs(infoMap)]
    .map(([genre, idx]) => idx)
    .flatMap((songs) => songs);
}
