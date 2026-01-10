/**
 * 1번 정점, 반드시 거쳐야하는 정점들과 다른 정점들까지의 최단 거리들을 각각 구하여 최단거리 찾기
 * @param {number} N 정점의 개수
 * @param {number} E 간선의 개수
 * @param {number[][]} lines 간선 [a, b, c][] (a정점-b정점의 거리c)
 * @param {number[]} edges 반드시 거쳐야하는 정점 2개
 */
const solution = (N, E, lines, [v1, v2]) => {
  const graph = Array.from({ length: N + 1 }, () => []); // 그래프
  for (let i = 0; i < E; i++) {
    const [a, b, c] = lines[i];
    // 양방향이므로 모두 저장,
    graph[a].push([b, c]);
    graph[b].push([a, c]);
  }

  /**
   *
   * @param {number} start 시작 정점
   * @returns {number[]} 시작 정점으로부터 i번째 정점까지 가는 최소 거리
   */
  const dijkstra = (start) => {
    const dp = new Array(N + 1).fill(Infinity); // start 정점부터 i번째 정점까지 최소 거리를 저장할 배열
    dp[start] = 0; // 시작점 초기화

    const queue = [[start, 0]]; // 큐, [현재 노드, 거리]

    while (queue.length) {
      queue.sort((a, b) => a[1] - b[1]); // 거리가 가장 짧은 노드를 선택하기 위함
      const [curNode, curDistance] = queue.shift(); // 추출
      if (dp[curNode] < curDistance) continue; // 이미 저장한 거리가 더 짧으면 contine;

      // 현재 노드와 연결된 노드 방문
      for (const [next, distance] of graph[curNode]) {
        const sumDistance = dp[curNode] + distance; // 다음 노드를 방문했을 때 길이 합
        // 길이 합이 이전에 저장된 값보다 작으면
        if (dp[next] > sumDistance) {
          dp[next] = sumDistance; // 값 갱신
          queue.push([next, sumDistance]); // 큐에 추가
        }
      }
    }
    return dp;
  };

  const distFrom1 = dijkstra(1); // 1번 정점에서의 각 정점 최단 거리
  const distFromV1 = dijkstra(v1); // v1 정점에서의 각 정점 최단 거리
  const distFromV2 = dijkstra(v2); // v2 정점에서의 각 정점 최단 거리

  // 1 -> v1 -> v2 -> N과 1 -> v2 -> v1 -> N의 거리를 계산하여 더 짧은 거리 구하기
  const path1 = distFrom1[v1] + distFromV1[v2] + distFromV2[N];
  const path2 = distFrom1[v2] + distFromV2[v1] + distFromV1[N];
  const result = Math.min(path1, path2);

  return result === Infinity ? -1 : result;
};

const fs = require('fs');
const path = require('path');
const filePath =
  process.platform === 'linux'
    ? '/dev/stdin'
    : path.join(__dirname, 'input1.txt');
const input = fs.readFileSync(filePath).toString('utf8').trim().split('\n');

const [N, E] = input[0].split(' ').map(Number);
const lines = input.slice(1, -1).map((v) => v.trim().split(' ').map(Number));
const [v1, v2] = input.at(-1).split(' ').map(Number);
console.log(solution(N, E, lines, [v1, v2]));