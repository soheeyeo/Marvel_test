// 01. **다음 자료의 타입을 지정해보십시오.**

// ```
// let obj = {
//   model : 'k5',
//   brand : 'kia',
//   price : 6000,
//   year : 2030,
//   date : '6월',
//   percent : '5%',
//   dealer : '김차장',
// }
// ```

// 귀찮으니까 한번에 지정하기 위해 index signature 이걸 써봅시다.

type ObjType = {
	[key :string] : string | number
}

let obj :ObjType = {
    model : 'k5',
    brand : 'kia',
    price : 6000,
    year : 2030,
    date : '6월',
    percent : '5%',
    dealer : '김차장',
}