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

// 02. **너무 자주만들어 쓰는 함수가 하나 있습니다**

// 이 함수는 파라미터로 object자료 하나를 선택적으로 집어넣을 수 있고

// 아무것도 return 해주지 않아야합니다.

// 함수 만들 때마다 여기에 타입 일일이 붙이기 귀찮아서 그런데

// 이 타입을 다른 파일에 저장해두고 import 해와서 함수 만들 때마다 쓰려면 어떻게 코드를 짜야할까요

export type ObjFunc = (a? :object) => void;