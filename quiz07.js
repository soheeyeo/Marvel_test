// 01. 버튼을 누르면 이미지를 바꿔봅시다.
//<img id="image" src="test.jpg">
// html 안에 test.jpg를 보여주고 있는 이미지 태그가 있다고 칩시다. 
// 이미지를 new.jpg 라는 이미지로 바꾸고 싶으면 자바스크립트 코드를 어떻게 짜야할까요?
// 성공여부는 크롬 개발자도구 켜면 src 속성이 잘 바뀌었는지 확인가능하겠죠?
var 이미지 = document.querySelector('#image');
if (이미지 instanceof HTMLImageElement) {
    이미지.src = 'new.jpg';
}
// 02. **바꾸고 싶은 html 요소가 많습니다.**
// ```
// <a class="naver" href="naver.com">링크</a>
// <a class="naver" href="naver.com">링크</a>
// <a class="naver" href="naver.com">링크</a>
// ```
// 3개의 링크가 있는데 이 요소들의 href 속성을 전부 https://kakao.com으로 바꾸고 싶은 겁니다.
// 자바스크립트 코드를 어떻게 짜야할까요?
var 링크2 = document.querySelectorAll('.naver');
for (var i = 0; i < 3; i++) {
    var a_1 = 링크2[i];
    if (a_1 instanceof HTMLAnchorElement) {
        a_1.href = 'https://kakao.com';
    }
}
