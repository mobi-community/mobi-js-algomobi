/*
풀이

1. Map을 이용하여 시간 복잡도를 최소로 합니다.
2. 들어오고 나갔는지의 여부를 Map을 통해 관리합니다.
3. 들어왔다 나간 시간이 아니라 그 날 총 있던 시간을 구해야하기에 차량 번호당 주차한 시간을 구해둡니다.
4. 나갔다면 이미 구해진 시간이 있는지 확인합니다. 있다면 값을 더하고 없으면 추가합니다.
    4-1. 또한 들어왔는지의 여부에서도 삭제를 해줍니다.
5. 들어왔던 시간을 통해 총 얼마가 나오는지 확인을 합니다.
6. 차량 번호를 통해 정렬을 해야하기 때문에 내보내기 이전에 정렬을 해서 지불할 값만 내보내줍니다.
*/

function changeMinute(times) {
    const [hours, minutes] = times.split(':').map(v => parseInt(v))

    return hours * 60 + minutes
}

function solution(fees, records) {
    var answer = [];
    const [initialMinute, initialPrice, count, countPrice] = fees;


    // 2. 들어오고 나갔는지의 여부를 Map을 통해 관리합니다.
    const ParkingWithCar = new Map();

    // 3. 들어왔다 나간 시간이 아니라 그 날 총 있던 시간을 구해야하기에 차량 번호당 주차한 시간을 구해둡니다.
    const ParkingWithTime = new Map();

    function carHandling(times, carNumber, action) {
        switch (action) {
            case "IN":
                ParkingWithCar.set(carNumber, times)
                break
            case "OUT":
                const prevTimes = changeMinute(ParkingWithCar.get(carNumber))
                const thisTimes = changeMinute(times)

                /*
                    4. 나갔다면 이미 구해진 시간이 있는지 확인합니다. 있다면 값을 더하고 없으면 추가합니다.
                    4-1. 또한 들어왔는지의 여부에서도 삭제를 해줍니다.
                */
                if (ParkingWithTime.has(carNumber)) {
                    ParkingWithTime.set(carNumber, ParkingWithTime.get(carNumber) + thisTimes - prevTimes)
                } else {
                    ParkingWithTime.set(carNumber, thisTimes - prevTimes)
                }

                ParkingWithCar.delete(carNumber)
                break
        }
    }

    records.forEach(element => {
        const [times, carNumber, action] = element.split(' ')
        carHandling(times, carNumber, action)
    });

    for (let car of ParkingWithCar) {
        const [carNumber] = car
        carHandling("23:59", carNumber, "OUT")
    }

    // 5. 들어왔던 시간을 통해 총 얼마가 나오는지 확인을 합니다.
    for (let car of ParkingWithTime) {
        const [carName, carTime] = car
        const useTime = Math.max(carTime - initialMinute, 0)
        const money = initialPrice + Math.ceil(useTime / count) * countPrice
        answer.push([carName, money])
    }

    // 6. 차량 번호를 통해 정렬을 해야하기 때문에 내보내기 이전에 정렬을 해서 지불할 값만 내보내줍니다.
    return answer.sort((a, b) => Number(a[0]) - Number(b[0])).map(v => v[1]);
}

console.log(solution([180, 5000, 10, 600], ["05:34 5961 IN", "06:00 0000 IN", "06:34 0000 OUT", "07:59 5961 OUT", "07:59 0148 IN", "18:59 0000 IN", "19:09 0148 OUT", "22:59 5961 IN", "23:00 5961 OUT"]))
