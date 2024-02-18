/*
해설
1. 속한 노래가 많이 재생된 장르를 먼저 수록합니다.
2. 장르 내에서 많이 재생된 노래를 먼저 수록합니다.
3. 장르 내에서 재생 횟수가 같은 노래 중에서는 고유 번호가 낮은 노래를 먼저 수록합니다.

풀이
1. 장르별로 총 재생 횟수를 계산하는 객체를 생성합니다.
2. 노래 정보를 담은 객체 배열 생성합니다.
3. 재생 횟수와 고유 번호를 기준으로 정렬합니다 이때 장르별로 총 재생 횟수를 기준으로 정렬합니다.
4. 각 장르별로 최대 노래 2개까지 선택하여 재생합니다.
*/

function solution(genres, plays) {
    // 장르별로 총 재생 횟수를 계산하는 객체 생성
    const totalPlaysByGenre = {};
    for (let i = 0; i < genres.length; i++) {
        const genre = genres[i];
        const play = plays[i];
        if (totalPlaysByGenre[genre]) {
            totalPlaysByGenre[genre] += play;
        } else {
            totalPlaysByGenre[genre] = play;
        }
    }

    // 노래 정보를 담은 객체 배열 생성
    const songs = [];
    for (let i = 0; i < genres.length; i++) {
        songs.push({
            id: i,
            genre: genres[i],
            play: plays[i]
        });
    }

    // 재생 횟수와 고유 번호를 기준으로 정렬
    songs.sort((a, b) => {
        if (a.genre === b.genre) {
            if (a.play === b.play) {
                return a.id - b.id;
            }
            return b.play - a.play;
        }
        return totalPlaysByGenre[b.genre] - totalPlaysByGenre[a.genre];
    });

    const answer = [];
    const selectedSongsByGenre = {};

    for (let i = 0; i < songs.length; i++) {
        const song = songs[i];

        if (!selectedSongsByGenre[song.genre]) {
            selectedSongsByGenre[song.genre] = 1;
            answer.push(song.id);
        } else if (selectedSongsByGenre[song.genre] < 2) {
            selectedSongsByGenre[song.genre]++;
            answer.push(song.id);
        }
    }

    return answer;
}

console.log(solution(["classic", "pop", "classic", "classic", "classic"], [500, 1000, 400, 400, 200]))