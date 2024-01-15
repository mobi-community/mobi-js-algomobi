/*
설계

method를 만든다.

down(n) [n, i] : i는 유지한채로 n칸만큼 아래로 이동간다.
right(n) [i, n] : i는 유지한채로 n칸만큼 오른쪽으로 이동한다.
up(n) [n, m] : i를 1씩 빼면서 m도 1씩 뺀다.

(while) count가 maxCount 일치할때까지 반복한다.
*/

class Game {
    constructor(number) {
        this.board = this.setBoard(number)
        this.maxCount = number * (number + 1) / 2;
        this.count = 0;
        this.x = 0;
        this.y = -1;
    }

    setBoard(number) {
        return Array.from({ length: number }, (_, i) => new Array(i + 1));
    }

    up(n) {
        while (n-- > 0) {
            this.board[--this.y][--this.x] = ++this.count;
        }
    }

    down(n) {
        while (n-- > 0) {
            this.board[++this.y][this.x] = ++this.count;
        }
    }

    right(n) {
        while (n-- > 0) {
            this.board[this.y][++this.x] = ++this.count;
        }
    }

    check() {
        return this.count === this.maxCount
    }
}

function solution(n) {
    const game = new Game(n);
    while (!game.check()) {
        game.down(n--);
        if (game.check()) break;
        game.right(n--);
        if (game.check()) break;
        game.up(n--);
    }
    return game.board.flat();
}