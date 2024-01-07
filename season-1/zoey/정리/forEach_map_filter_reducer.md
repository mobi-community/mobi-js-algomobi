##forEach

<!-- function forEach(함수, 인자){
    for(let i=0; i<a.length; i++){

    }
} -->

//인자는 생략 가능하다 함수는 꼭 매개 변수로 넘겨야함

a = [10, 11, 12, 13, 14, 15]
a.forEach(function(v, i){
console.log(v, i, this);
}, [1, 2]);

##map

a = [10, 11, 12, 13, 14, 15]
let answer = a.map(function(v, i){
return v\*v;
}, [1, 2]);
console.log(answer) // [100, 121, 144, 159, 196, 225]

##filter

##reducer

a = [10, 11, 12, 13, 14, 15]
let answer = a.reduce(function(acc, v){
return acc + v
}, 0);
console.log(answer) // [100, 121, 144, 159, 196, 225]
