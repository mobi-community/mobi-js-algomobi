/*
모든 섬을 연결해야 합니다.
1. 방문 한 섬이 n 개가 될 때까지 시도합니다.
2. Set을 이용하여 방문한 섬들을 기록합니다.
3. Map을 이용하여 방문한 섬들을 정리해둡니다.

현재 모든 가능한 경로를 시도하는 브루트 포스 접근법을 활용하여 구현을 시도하였지만 다음과 같은 문제점들이 있었습니다.

비효율적 탐색 방식: visitIsland 함수가 모든 간선을 순회하며 다음 간선을 찾는 방식은 비효율적입니다. 
    Union-Find 자료구조를 사용하여 각 노드의 연결 상태를 추적하며, 간선들을 연결할 때마다 체크하는 것이 더 효과적일 수 있습니다.

불필요한 중복 처리: visitIsland 함수는 node로 전달되는 배열을 반복하여 Set에 추가합니다. 
    하지만 실제로 필요한 것은 연결된 노드 집합을 추적하는 것이므로, Set의 사용 방식에 대한 재고가 필요합니다.

초기값 설정 문제: minValue를 Infinity로 초기화한 후 각 함수 호출마다 최소값을 갱신하는 방식은 적절하지만, 
    이로 인해 각 재귀 호출에서 minValue가 예상치 않게 변경될 위험성이 있습니다. 

따라서 union 함수로 두 노드가 이미 같은 집합에 있는지 확인하고 (find를 사용하여), 같은 집합에 있지 않다면 간선을 추가하여 두 집합을 합쳐봅니다.

크루스칼 알고리즘은 간선의 비용을 기준으로 오름차순으로 정렬한 다음, 순차적으로 간선을 선택하여 최소 신장 트리를 구성합니다.

참고 사이트 https://chanhuiseok.github.io/posts/algo-33/

*/

// function solution(n, costs) {
//     let minValue = Infinity
//     costs.sort((a,b)=> a[2]-b[2])

//     function visitIsland(visited, node, sum) {
//         if(sum > minValue) return

//         const copyVisited = new Set(visited);

//         node.forEach(v=>{
//             copyVisited.add(v)
//         })

//         if (copyVisited.size === n) {
//             minValue = Math.min(sum, minValue)
//             return
//         };

//         costs.forEach(island => {
//             const [start, end, value] = island;

//             if((!copyVisited.has(start) && copyVisited.has(end))||(copyVisited.has(start) && !copyVisited.has(end))){
//                 if(!copyVisited.has(start)){
//                     visitIsland(copyVisited, [start], sum + value)
//                 }else{
//                     visitIsland(copyVisited, [end], sum + value)
//                 }
//             }
//         })
//     }

//     costs.forEach((island) => {
//         const visited = new Set();
//         const [start, end, value] = island;

//         visitIsland(visited, [start, end], value);
//     });

//     return minValue;
// }

function solution(n, costs) {
    costs.sort((a, b) => a[2] - b[2]);

    // Union-Find 알고리즘을 위한 부모 배열을 초기화합니다.
    const parent = [];
    for (let i = 0; i < n; i++) {
        parent[i] = i;
    }

    // Union-Find 알고리즘의 find 함수
    // 섬의 '루트'를 찾습니다. 즉, 간접적으로 연결된 섬들 중에서 가장 처음에 연결된 섬을 찾습니다.
    function find(u) {
        if (u !== parent[u]) {
            parent[u] = find(parent[u]);
        }
        return parent[u];
    }

    // Union-Find 알고리즘의 union 함수
    // 두 섬을 안전하게 연결합니다. 즉, 두 섬이 서로 연결되어 있는지 확인하고, 연결이 안 되어있으면 다리를 놓아 연결하는 작업을 합니다.
    function union(u, v) {
        const rootU = find(u);
        const rootV = find(v);
        if (rootU !== rootV) {
            parent[rootV] = rootU;
        }
    }

    let minValue = 0;
    costs.forEach(([u, v, cost]) => {
        // 사이클이 발생하지 않는 경우(두 노드의 루트가 다른 경우)에만 간선을 추가한다.
        if (find(u) !== find(v)) {
            union(u, v);
            minValue += cost;
        }
    });

    return minValue;
}

console.log(
    solution(5, [
        [0,1,5],[1,2,3],[2,3,3],[3,1,2],[3,0,4],[2,4,6],[4,0,7]
    ])
);
