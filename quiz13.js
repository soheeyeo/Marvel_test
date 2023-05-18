// 01. **문자를 집어넣으면 문자의 갯수, array를 집어넣으면 array안의 자료 갯수를 콘솔창에 출력해주는 함수는 어떻게 만들까요?**
// 연습삼아 Generic 이런걸로 만들어봅시다. 굳이 Generic 이런게 필요는 없겠지만요
// (동작 예시)
// **함수<string>('hello')** 이렇게 사용하면 콘솔창에 5가 나와야합니다.
// **함수<string[]>( ['kim', 'park'] )** 이렇게 사용하면 콘솔창에 2가 나와야합니다.
function checkFunc(x) {
    console.log(x.length);
}
checkFunc('hello');
checkFunc(['kim', 'park']);
function makeObj(x) {
    return JSON.parse(x);
}
var data = '{"name" : "dog", "age" : 1 }';
var a = makeObj(data);
console.log(a);
