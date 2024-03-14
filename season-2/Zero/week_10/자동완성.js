/*
해설

트라이 알고리즘을 사용하여 검색 알고리즘을 구현한다.

각 점에서는 자식에 대한 포인터들을 모두 배열로 저장하고 있습니다.

제일 긴 문자열의 길이를 L 총 문자열의 수를 M 이라 할 때 시간복잡도는 다음과 같습니다.

생성시 시간 복잡도 O(M*L), 탐색시 시간 복잡도 O(L)

저장을 할 경우

저장을 할 때는 각 점에 자식에 대한 포인터들의 정보를 모두 저장합니다.

찾을 경우

현재 노드를 지나는 단어의 수가 1이 될 때까지 찾습니다.

*/

class TrieNode {
    constructor() {
        this.children = {};
        this.count = 0;
    }
}

class Trie {
    constructor() {
        this.root = new TrieNode();
    }

    insert(word) {
        let node = this.root;
        for (let char of word) {
            if (!node.children[char]) {
                node.children[char] = new TrieNode();
            }
            node = node.children[char];
            node.count++;
        }
    }

    find(word) {
        let node = this.root;
        let inputCount = 0;
        for (let char of word) {
            node = node.children[char];
            inputCount++;
            if (node.count === 1) {
                break;
            }
        }
        return inputCount;
    }
}

function solution(words) {
    let trie = new Trie();
    let totalInputCount = 0;

    for (let word of words) {
        trie.insert(word);
    }

    for (let word of words) {
        totalInputCount += trie.find(word);
    }

    return totalInputCount;
}

let words = ["go", "gone", "guild"];
console.log(solution(words));
