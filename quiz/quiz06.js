// 01. **위 코드에서 회원정보라는 변수에 타입지정 알아서 해보십시오.**
// - plusOne이라는 속성은 함수여야하고, 숫자를 넣어서 숫자를 뱉는 함수여야합니다.
// - changeName이라는 속성은 함수여야하고, 아무것도 return하면 안됩니다.
// - type 키워드를 쓰든 말든 알아서 합시다.
var 회원정보 = {
    name: 'kim',
    plusOne: function (a) {
        return a + 1;
    },
    changeName: function () {
        console.log('안녕');
    }
};
회원정보.plusOne(1);
회원정보.changeName();
var cutZero = function (a) {
    var result = a.replace(/^0+/, "");
    return result;
};
var removeDash = function (x) {
    var result = x.replace(/-/g, "");
    return parseFloat(result);
};
function 만들함수(a, func1, func2) {
    var result = func1(a);
    var result2 = func2(result);
    console.log(result2);
}
만들함수('010-1111-2222', cutZero, removeDash);
