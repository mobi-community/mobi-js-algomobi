/*
해설
시작 점을 구합니다.
위치를 구합니다.

방문 점을 구합니다.
만약 똑같은 방문점이 있다면 종료합니다.

최종적으로 G에 도달했을 경우 모든 경우의 수를 저장합니다.
가장 적은 값을 기준으로 방문점이 넘었을 경우 함수를 멈춥니다.

풀이

1. 시작 점과 마지막 위치를 구합니다.
2. 너비 우선 탐색을 진행하기 위해 queue를 구현합니다.
3. 모든 방향으로 탐색을 진행하고, 만약 방문한 적이 있을경우 탐색을 중지핣니다.
4. 만약 도착점에 도달했을 경우 마지막으로 구한 횟수와 현재의 갯수중 높은쪽을 저장합니다.
5. 저장한 값을 반환합니다. 저장한 값이 없을 경우 -1를 반환합니다.
*/

class RicochetGame {
    constructor(map, position) {
        this.map = map;
        this.col = map.length;
        this.row = map[0].length;
        this.position = position;
    }

    move(number) {
        switch (number) {
            case 0:
                this.moveTop();
                break;
            case 1:
                this.moveRight();
                break;
            case 2:
                this.moveBottom();
                break;
            case 3:
                this.moveLeft();
                break;
        }
    }

    moveTop() {
        let [x, y] = this.position;

        while (y - 1 >= 0 && this.map[y - 1][x] !== 'D') {
            y--;
        }

        this.position = [x, y];
    }

    moveRight() {
        let [x, y] = this.position;

        while (x + 1 < this.row && this.map[y][x + 1] !== 'D') {
            x++;
        }

        this.position = [x, y];
    }

    moveBottom() {
        let [x, y] = this.position;

        while (y + 1 < this.col && this.map[y + 1][x] !== 'D') {
            y++;
        }

        this.position = [x, y];
    }

    moveLeft() {
        let [x, y] = this.position;

        while (x - 1 >= 0 && this.map[y][x - 1] !== 'D') {
            x--;
        }

        this.position = [x, y];
    }

    getPosition() {
        return this.position;
    }
}

function solution(board) {
    const startPointY = board.findIndex((val) => val.includes('R'));
    board = board.map((v) => v.split(''));
    const startPointX = board[startPointY].findIndex((val) => val === 'R');
    const startPoint = [startPointX, startPointY];

    const goalPointY = board.findIndex((val) => val.includes('G'));
    const goalPointX = board[goalPointY].findIndex((val) => val === 'G');
    const goalPoint = [goalPointX, goalPointY].toString();

    const visited = new Set();

    let goalCount = Infinity

    if (goalPoint === startPoint.toString()) return 0;


    let queue = [[startPoint, 0]];

   while (queue.length > 0) {
        let [currentPoint, count] = queue.shift();
        const visitPosition = currentPoint.toString();

        if(goalPoint === visitPosition){
            goalCount = Math.min(count, goalCount);
        }

        if (visited.has(visitPosition)) continue;

        visited.add(visitPosition);

        for (let i = 0; i < 4; i++) {
            if(goalCount === count + 1) break;
            const copy = new RicochetGame(board, [...currentPoint]);
            copy.move(i);
            queue.push([copy.getPosition(), count + 1]);
        }
    }

    return goalCount === Infinity ? -1 : goalCount;
}

console.log(solution(['...D..R', '.D.G...', '....D.D', 'D....D.', '..D....']));
