/*
@ 풀이 방법 생각하기
1. fees 배열을 구조분해할당하여 각 값을 구한다.
2. records에 반복문을 적용하여 각 차량에 대한 Map 객체를 구성한다.
    - 이때 주차된 차와 시간을 저장하는 객체와 차의 가격을 저장하는 객체를 별도로 생성해야 한다.
3. 차량의 누적시간에 대한 요금을 계산한다.
*/

const getTimeDiff = (start, end) => {
  const [start_h, start_m] = start.split(":");
  const [end_h, end_m] = end.split(":");
  return (
    Number(start_h) * 60 +
    Number(start_m) -
    (Number(end_h) * 60 + Number(end_m))
  );
};

const makeMap = (arr) => {
  const parkingLot = new Map();
  const feeMap = new Map();
  for (let i = 0; i < arr.length; i++) {
    const [time, car_num, action] = arr[i].split(" ");
    if (action === "IN") {
      // 입차 시 입차 시간 저장
      parkingLot.set(car_num, time);
    } else {
      // 출차 시 누적 시간 저장
      // 이전 기록이 있을 경우와 없을 경우 구분
      if (feeMap.has(car_num)) {
        const sum =
          feeMap.get(car_num) + getTimeDiff(time, parkingLot.get(car_num));
        feeMap.set(car_num, sum);
      } else {
        const sum = getTimeDiff(time, parkingLot.get(car_num));
        feeMap.set(car_num, sum);
      }
      // 출차 시 주차장에서 해당 차 삭제
      parkingLot.delete(car_num);
    }
  }
  // 만약 주차장에 차가 남아 있다면
  for (let [car_num, time] of parkingLot) {
    if (parkingLot.has(car_num)) {
      feeMap.set(
        car_num,
        (feeMap.get(car_num) | 0) + getTimeDiff("23:59", time)
      );
    }
  }
  return [...feeMap].sort().map((info) => info[1]);
};

function solution(fees, records) {
  const [basic_h, basic_fee, per_h, per_fee] = fees;
  // 주차요금 계산하기
  const hourArr = makeMap(records).map((hour) => {
    if (hour <= basic_h) return basic_fee;
    const over_time = hour - basic_h;
    return basic_fee + Math.ceil(over_time / per_h) * per_fee;
  });
  return hourArr;
}
