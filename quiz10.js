// 01. **숫자 여러개를 입력하면 최댓값을 return 해주는 함수를 만들어봅시다.**
// 최댓값(6,3,7,2) 이렇게 쓰면 7이 return 되어야합니다.
// (조건1) 넣을 수 있는 숫자 갯수는 제한없음, 0 이상의 정수만 가능합니다.
// (조건2) Math.max() 사용금지 반복문이나 쓰셈
function Max() {
    var a = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        a[_i] = arguments[_i];
    }
    var result = 0;
    a.forEach(function (i) {
        if (result < i) {
            result = i;
        }
    });
    return result;
}
console.log(Max(6, 3, 7, 2));
function User(_a) {
    var user = _a.user, comment = _a.comment, admin = _a.admin;
    console.log(user, comment, admin);
}
User({ user: 'kim', comment: [3, 5, 4], admin: false });
