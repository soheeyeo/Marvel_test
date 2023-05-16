// 01. **Car 그리고 Bike 타입을 만들었는데 너무 길어요**

// ```
// (index.ts)

// type Car = {
//   wheel : number,
//   model : string
// }
// interface Bike {
//   wheel : 2,
//   model : string
// }
// ```

// index.ts에 만들어놨는데 더러워서 다른 파일로 옮겨서 사용하고 싶습니다.

// 빨리 위 코드를 다른 파일 아무데나 저장하신 후 index.ts에서 가져와서 변수만들 때 사용해보십시오.

export type Car= {
	wheel : number,
	model : string
}

export interface Bike {
	wheel : 2,
	model : string
}