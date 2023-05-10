// 01. 버튼을 누르면 이미지를 바꿔봅시다.

//<img id="image" src="test.jpg">

// html 안에 test.jpg를 보여주고 있는 이미지 태그가 있다고 칩시다. 

// 이미지를 new.jpg 라는 이미지로 바꾸고 싶으면 자바스크립트 코드를 어떻게 짜야할까요?

// 성공여부는 크롬 개발자도구 켜면 src 속성이 잘 바뀌었는지 확인가능하겠죠?

let 이미지 = document.querySelector('#image');
if(이미지 instanceof HTMLImageElement) {
	이미지.src = 'new.jpg';
}