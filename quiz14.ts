// 01. **여러분이 최근에 사먹은 음식의 1. 이름 2. 가격 3. 맛있는지여부를 array 자료에 담아보고 타입지정까지 해보십시오.**

// 오늘 배운 tuple 타입으로 타입지정합시다.

// 쉬워서 답은 생략합니다.

// (예시) **[ '동서녹차', 4000, true ]** 이런 자료 만들고 타입지정하라는 소리입니다.

let food :[string, number, boolean] = ['탕후루', 3000, true];


// 02. **이렇게 생긴 자료는 타입지정 어떻게 해야할까요?**

// ```
// let arr = ['동서녹차', 4000, true, false, true, true, false, true]
// ```

// 몇개인지는 모르겠지만 true와 false가 셋째 자료부터 잔뜩 들어올 수 있다고 합니다.

// tuple 타입과 spread 연산자를 써보도록 합시다.

type Arr2 = [string, number, ...boolean[]];
let add :Arr2 = ['동서녹차', 4000, true, false, true, true, false, true]; 