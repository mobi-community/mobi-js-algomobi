/*
풀이
1. class를 만들어서 구현합니다.
2. 좌표의 경우 Map을 사용하여 O(n) 시간복잡도로 찾아갈 수 있게 구현해줍니다.
3. touch 메소드를 구현합니다. 만약 가운데의 숫자가 나올 경우 길이를 비교를 해줍니다.
    길이를 비교를 해줄경우 맨허튼의 거리 공식을 사용합니다.
4. right, left를 세팅을 해줄경우 result의 해당 문구를 추가해줍니다.
5. 마지막으로 result를 반환합니다.
*/

const keyPadPosition = new Map()
keyPadPosition.set(0, [1, 3])
keyPadPosition.set(1, [0, 0])
keyPadPosition.set(2, [1, 0])
keyPadPosition.set(3, [2, 0])
keyPadPosition.set(4, [0, 1])
keyPadPosition.set(5, [1, 1])
keyPadPosition.set(6, [2, 1])
keyPadPosition.set(7, [0, 2])
keyPadPosition.set(8, [1, 2])
keyPadPosition.set(9, [2, 2])

class KeyPad {
    constructor(handType) {
        this.leftPosition = [0, 3];
        this.rightPosition = [2, 3];
        this.handType = handType
        this.result = ""
    }

    touch(position) {
        const [x] = position
        if (x === 0) {
            this.setLeftPosition(position)
        } else if (x === 1) {
            const rightLength = this.getLength(this.rightPosition, position)
            const leftLength = this.getLength(this.leftPosition, position)

            if (rightLength === leftLength) {
                switch (this.handType) {
                    case "right":
                        this.setRightPosition(position)
                        break
                    case "left":
                        this.setLeftPosition(position)
                        break
                }
            } else {
                rightLength > leftLength ? this.setLeftPosition(position) : this.setRightPosition(position)
            }
        } else {
            this.setRightPosition(position)
        }
    }

    getLength(startPoint, endPoint) {
        const [x1, y1] = startPoint
        const [x2, y2] = endPoint

        return Math.abs(x1 - x2) + Math.abs(y1 - y2)
    }

    setLeftPosition(position) {
        this.leftPosition = position
        this.result += "L"
    }

    setRightPosition(position) {
        this.rightPosition = position
        this.result += "R"
    }

    getResult() {
        return this.result;
    }
}

function solution(numbers, hand) {
    const keyPad = new KeyPad(hand);

    numbers.forEach(element => {
        const position = keyPadPosition.get(element)
        keyPad.touch(position)
    });

    return keyPad.getResult();
}

console.log(solution([1, 2, 3, 4, 5, 6, 7, 8, 9, 0], "right"))
