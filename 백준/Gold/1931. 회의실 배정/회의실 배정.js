const fs = require('fs');
const input = fs
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

/**
 *
 * @param {number} N
 * @param {Array<[number, number]>} meetings
 */
const solution = (N, meetings) => {
  const ascendingMeetings = meetings.sort((a, b) => {
    if (a[1] === b[1]) return a[0] - b[0];
    return a[1] - b[1];
  });

  let meetingCount = 0;
  let lastMeetingEnd = 0;

  for (let [startTime, endTime] of ascendingMeetings) {
    if (startTime >= lastMeetingEnd) {
      meetingCount++;
      lastMeetingEnd = endTime;
    }
  }

  return meetingCount;
};

const N = parseInt(input.shift());
const meetings = input.map((v) => v.split(' ').map(Number));
console.log(solution(N, meetings));