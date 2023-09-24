function solution(array, commands) {
  const answer = [];
  for (let i = 0; i < commands.length; i++) {
    const element = array
      .slice(commands[i][0] - 1, commands[i][1])
      .sort((a, b) => a - b);
    answer.push(element[commands[i][2] - 1]);
  }
  return answer;
}

solution([10, 2], [[1, 2, 1]]);
