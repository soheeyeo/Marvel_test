// 01. **다음 타입을 변환기 돌려보십시오.**

// ```
// type Bus = {
//   color : string,
//   model : boolean,
//   price : number
// }
// ```

// 동료가 잘못 만든 타입입니다.

// color, model, price 속성은 전부 **string 또는 number 타입**이어야합니다.

// 1. 변환기 하나 만드시고

// 2. 기존 Bus 타입을 변환기 돌려서 위 조건을 충족하는 새로운 타입을 하나 만들어보십시오.

type Bus = {
    color : string,
    model : boolean,
    price : number
}
    
type TypeChanger<MyType> = {
    [key in keyof MyType] :string | number;
}

type 새로운타입 = TypeChanger<Bus>;