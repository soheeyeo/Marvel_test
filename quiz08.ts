// 01. **Car 클래스를 만들고 싶습니다.**

// 1. 대충 { model : '소나타', price : 3000 } 이렇게 생긴 object를 복사해주는 class를 만들어보십시오.

// 2. 그리고 복사된 object 자료들은 .tax() 라는 함수를 사용가능한데 현재 object에 저장된 price의 10분의1을 출력해주어야합니다.

// 3. model과 price 속성의 타입지정도 알아서 잘 해보십시오. tax() 함수의 return 타입도요.

// (동작 예시)

// let car1 = new Car('소나타', 3000)
// console.log(car1) //콘솔창 출력결과는 { model : '소나타', price : 3000 }console.log(car1.tax())//콘솔창 출력결과는 300

class Car {
	model :string;
	price :number;
	constructor(a :string, b :number) {
		this.model = a;
		this.price = b;
	}

	tax() :number{
		return this.price * 0.1;
	}
}