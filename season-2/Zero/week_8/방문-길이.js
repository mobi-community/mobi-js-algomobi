/*
풀이
1. 모든 좌표를 배열로 배열로 쪼갭니다.
2. 각 커맨드에 맞게 이동 함수를 실행시킵니다.
3. 만약 좌표가 범위를 벗어났다면 이동 함수를 중지시킵니다.
4. 이동된 범위의 좌표를 기록합니다 r- 가로이동 c- 세로이동 ${큰수}-${작은수}-${반대 쪽 좌표}
5. 이동된 범위의 좌표를 토대로 이동된 경로를 분석합니다.
*/

class Map {
    constructor() {
        this.position = [0, 0]
        this.moveCommands = new Set()
    }

    move(command) {
        switch (command) {
            case "U":
                this.moveTop();
                break;
            case "R":
                this.moveRight();
                break;
            case "D":
                this.moveBottom();
                break;
            case "L":
                this.moveLeft();
                break;
        }
    }

    moveTop() {
        let [x, y] = this.position;
        if (y + 1 === 6) return

        this.moveCommands.add(`c-${y + 1}-${y}-${x}`)
        y++;


        this.position = [x, y];
    }

    moveRight() {
        let [x, y] = this.position;
        if (x + 1 === 6) return

        this.moveCommands.add(`r-${x + 1}-${x}-${y}`)
        x++;

        this.position = [x, y];
    }

    moveBottom() {
        let [x, y] = this.position;
        if (y - 1 === -6) return

        this.moveCommands.add(`c-${y}-${y - 1}-${x}`)
        y--;

        this.position = [x, y];
    }

    moveLeft() {
        let [x, y] = this.position;
        if (x - 1 === -6) return

        this.moveCommands.add(`r-${x}-${x - 1}-${y}`)
        x--

        this.position = [x, y];
    }

    getMoveLength() {
        console.log(this.moveCommands)
        return this.moveCommands.size;
    }
}


function solution(dirs) {
    const map = new Map();

    [...dirs].forEach(element => {
        map.move(element)
    });

    return map.getMoveLength();
}

console.log(solution("ULURRDLLU"))