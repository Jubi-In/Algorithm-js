function solution(array, commands) {
  const answer = [];

  for (let command of commands) {
    const temp = array.slice(command[0] - 1, command[1]);
    temp.sort((a, b) => a - b);
    answer.push(temp[command[2] - 1]);
  }

  return answer;
}
