/*
설계

1. (for, filter) 모든 입장시 반복을 돌면서 현재 몇개의 방이 있는지 검사를 한다.
2. 현재 입장 시간보다 퇴장시간이 늦고, 입장시간이 빠른 스케쥴을 검사한다.
3. (push), 해당 검사된 스케쥴을 answer에 담는다.
4. (Math.max) 가장 많은 스케쥴이 겹쳐있는 시간대로 내보낸다.
*/

function changeTime(prev, add) {
    let hour = Math.floor(prev / 100);
    let minute = prev % 100 + add;
    if (minute >= 60) {
        minute -= 60;
        hour += 1;
    }
    return hour * 100 + minute;
}

function solution(book_time) {
    const answer = [];
    const numberTime = book_time.map((v) =>
        v.map((c, i) => {
            const ans = Number(c.replace(':', ''));
            return i === 1 ? changeTime(ans, 10) : ans;
        })
    );

    numberTime.sort((a, b) => a[0] - b[0]);

    numberTime.forEach((val) => {
        answer.push(numberTime.filter((v) => v[1] >= val[0] && v[0] <= val[0]).length);
    });

    return Math.max(...answer);
}

const example = [
    ['09:10', '10:10'],
    ['10:20', '12:20'],
];