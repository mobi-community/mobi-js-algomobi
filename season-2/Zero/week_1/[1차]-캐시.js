/*
설계 
1. 캐시를 구현한다. 캐시는 다음과 같은 기능들을 가지고 있다.
    - 캐시 순서를 가지고있다. 가장 최근에 조회된 메모리가 가장 상위 메모리로 변환된다.
    - 가장 늦게 조회된 데이터는 새로 들어온 데이터가 있다면 메모리 크기를 벗어났을 경우 지워진다. (cache miss)
    - 메모리가 남아있거나 이미 캐시되어 있는 데이터의 경우 바로 들어올 수 있다. (cache hit)
2. (for) 도시 이름만큼 반복을 돌리면서 캐시에 저장을 합니다. 
3. (add) 캐시에 저장을 하면 리턴 값으로 걸리는 시간을 되돌려 받습니다.
4. (return) 총 걸린 시간을 반환합니다.
*/

/*
문제 상황
Map의 도시 이름과 인덱스로 key-value 값을 설정하다 보니 어디서 문제가 발생한지 모르겠다.
    => 배열로 변환하여 문제해결 (다행히 시간에는 걸리지 않았다.)
*/

class Cache {
    constructor(cacheSize) {
        this.cacheMemory = new Map();
        this.pointerMemory = [];
        this.cacheSize = cacheSize;
        this.total = 0;
    }

    /*
    addCache(input) {
        input = input.toLowerCase();
        if (!this.cacheMemory.has(input) && this.cacheMemory.size === this.cacheSize) {
            this.removeCache(this.cacheSize - 1);
        }

        if (this.cacheMemory.has(input)) {
            this.total += 1;
            const selectIndex = this.cacheMemory.get(input);
            for (let i = selectIndex; i > 0; i--) {
                const prevIndex = this.pointerMemory.get(i - 1);
                const prevTitle = this.cacheMemory.get(prevIndex);
                this.pointerMemory.set(i, prevTitle);
                this.cacheMemory.set(prevTitle, i);
            }
            this.pointerMemory.set(0, input);
            this.cacheMemory.set(input, 0);
        } else {
            this.total += 5;
            const size = this.cacheMemory.size;
            for (let i = size - 1; i >= 0; i--) {
                const prevIndex = this.pointerMemory.get(i);
                const prevTitle = this.cacheMemory.get(prevIndex);
                this.pointerMemory.set(i + 1, prevTitle);
                this.cacheMemory.set(prevTitle, i + 1);
            }
            this.pointerMemory.set(0, input);
            this.cacheMemory.set(input, 0);
        }
    }
    */

    addCache(input) {
        input = input.toLowerCase();
        if (!this.cacheMemory.has(input) && this.cacheMemory.size === this.cacheSize) {
            this.removeCache();
        }

        if (this.cacheMemory.has(input)) {
            this.total += 1;
            const selectIndex = this.pointerMemory.indexOf(input);
            this.pointerMemory.splice(selectIndex, 1);
        } else {
            this.total += 5;
        }
        this.pointerMemory.unshift(input);
        this.cacheMemory.set(input, 0);
    }

    removeCache() {
        const deleteTitle = this.pointerMemory.pop();
        if (deleteTitle !== undefined) {
            this.cacheMemory.delete(deleteTitle);
        }
    }

    getTotal() {
        return this.total;
    }
}


const example = [3, ["Jeju", "Pangyo", "Seoul", "NewYork", "LA", "Jeju", "Pangyo", "Seoul", "NewYork", "LA"]]

function solution(cacheSize, cities) {
    const cache = new Cache(cacheSize);

    if (cacheSize === 0) {
        return cities.length * 5
    }

    cities.forEach(val => {
        cache.addCache(val)
    })

    return cache.getTotal();
}

console.log(solution(...example))