// 01. **위 코드에서 회원정보라는 변수에 타입지정 알아서 해보십시오.**
// - plusOne이라는 속성은 함수여야하고, 숫자를 넣어서 숫자를 뱉는 함수여야합니다.
// - changeName이라는 속성은 함수여야하고, 아무것도 return하면 안됩니다.
// - type 키워드를 쓰든 말든 알아서 합시다.

type Member = {
	name :string,
	plusOne : (a :number) => number,
	changeName : () => void
}

let 회원정보:Member = {
	name :'kim', 
	plusOne(a){
		return a + 1; 
	},
	changeName : () => {
		console.log('안녕');
	}
}

회원정보.plusOne(1);
회원정보.changeName();