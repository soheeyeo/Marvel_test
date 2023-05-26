// 01. **타입 파라미터로**

// 1. array 타입을 입력하면

// 2. array의 첫 자료가 string이면 string 타입을 그대로 남겨주고

// 3. array의 첫 자료가 string이 아니면 unknown 을 남겨주려면 어떻게 타입을 만들어놔야할까요?

// (동작예시)

// ```
// let age1 :Age<[string, number]>;
// let age2 :Age<[boolean, number]>;
// ```

// 이러면 age1의 타입은 string, age2의 타입은 unknown이 되어야합니다. (array나 tuple이나 그게 그거임)

// 이걸 만족하는 **type Age를 만들어봅시다.**

type Age<T> = T extends [string, ...any] ? T[0] : unknown;

let age1 :Age<[string, number]>;
let age2 :Age<[boolean, number]>;

