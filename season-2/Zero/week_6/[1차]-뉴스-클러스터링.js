/*
해설
입력으로는 str1과 str2의 두 문자열이 들어온다. 입력으로 들어온 문자열은 두 글자씩 끊어서 다중집합의 원소로 만든다.
다중집합 원소 사이를 비교할 때, 대문자와 소문자의 차이는 무시한다. "AB"와 "Ab", "ab"는 같은 원소로 취급한다.

입력으로 들어온 두 문자열의 자카드 유사도를 출력한다. 유사도 값은 0에서 1 사이의 실수이므로, 
이를 다루기 쉽도록 65536을 곱한 후에 소수점 아래를 버리고 정수부만 출력한다.

문제
첫 번째 코드에서는 Set을 사용하여 교집합과 합집합을 구하고 있습니다. Set은 중복된 값을 제거하므로, 같은 요소가 여러 번 나타날 경우 이를 한 번으로 취급합니다. 
따라서, 이 코드는 멀티셋(multiset)에 대한 자카드 유사도를 정확히 계산하지 못합니다.

Map을 사용하여 각 배열의 요소와 그 요소의 개수를 저장합니다. 그리고 이 정보를 바탕으로 교집합과 합집합을 구합니다. 
같은 요소가 여러 번 나타날 경우 이를 모두 고려하여 자카드 유사도를 계산할 수 있습니다.
*/

function makeArr(str) {
    const arr = []
    for (let i = 0; i < str.length - 1; i++) {
        const pair = str.slice(i, i + 2)
        if (pair.match(/^[a-zA-Z]{2}$/)) {
            arr.push(pair)
        }
    }
    return arr
}

// function getJaccard(arr1, arr2) {
//     const intersection = [...new Set(arr1.filter(val => arr2.includes(val)))]
//     const union = [...new Set([...arr1, ...arr2])]
//     return intersection.length / union.length
// }

// function solution(str1, str2) {
//     const CHECK = 65536
//     const changeArr1 = makeArr(str1.toLowerCase())
//     const changeArr2 = makeArr(str2.toLowerCase())
//     if (changeArr1.length + changeArr2.length === 0) return CHECK
//     return Math.floor(getJaccard(changeArr1, changeArr2) * CHECK)
// }

function getJaccard(arr1, arr2) {
    const set1 = new Map();
    const set2 = new Map();

    for (const val of arr1) {
        set1.set(val, (set1.get(val) || 0) + 1);
    }

    for (const val of arr2) {
        set2.set(val, (set2.get(val) || 0) + 1);
    }

    let intersection = 0;
    let union = 0;

    for (const [key, val] of set1) {
        if (set2.has(key)) {
            intersection += Math.min(val, set2.get(key));
            union += Math.max(val, set2.get(key));
        } else {
            union += val;
        }
    }

    for (const [key, val] of set2) {
        if (!set1.has(key)) {
            union += val;
        }
    }

    return intersection / union;
}

function solution(str1, str2) {
    const CHECK = 65536
    const changeArr1 = makeArr(str1.toLowerCase())
    const changeArr2 = makeArr(str2.toLowerCase())
    if (changeArr1.length + changeArr2.length === 0) return CHECK
    return Math.floor(getJaccard(changeArr1, changeArr2) * CHECK)
}

console.log(solution("aa1+aa2", "AAAA12"))