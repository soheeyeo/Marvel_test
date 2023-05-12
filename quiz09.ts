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

// 02. **array 안에 object 여러개가 필요합니다.**

// 쇼핑몰 장바구니를 구현하려고 하는데

// ```
// let 장바구니 = [ { product : '청소기', price : 7000 }, { product : '삼다수', price : 800 } ]
// ```

// 이렇게 생긴 object들이 잔뜩 들어갈 수 있는 array는 어떻게 타입을 지정해야할까요?

// 오늘 배운 interface 문법을 써봅시다.

interface Cart {
	product :string;
	price :number;
}

let 장바구니 :Cart[] = [ { product : '청소기', price : 7000 }, { product : '삼다수', price : 800 } ]

