// 01. **interface 이용해서 간단하게 타입을 만들어봅시다**

// ```
// let 상품 = { brand : 'Samsung', serialNumber : 1360, model : ['TV', 'phone'] }
// ```

// 이런 변수가 있는데 interface 키워드로 타입지정 이쁘게 하고 싶습니다. 어떻게 코드를 짜면 될까요?

// 무슨 타입일지는 알아서 기입합시다.

interface Item {
	brand :string;
	serialNumber :number;
	model :string[]	
}

let 상품 :Item = { brand : 'Samsung', serialNumber : 1360, model : ['TV', 'phone'] }