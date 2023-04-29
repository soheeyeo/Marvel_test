// 1-01.다음 변수 4개에 타입을 지정해봅시다.
// let user = 'kim';
// let age = undefined;
// let married = false; 
// let 철수 = [user, age, married];

let user :string = 'kim';
let age :undefined = undefined;
let married :boolean = false; 
let 철수 : (string | undefined | boolean)[] = [user, age, married];