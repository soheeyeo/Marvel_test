// 01. **다음 x, y, z 속성의 특징을 설명해보십시오.**
// ```
// class User {
//   private static x = 10;
//   public static y = 20;
//   protected z = 30;
// }
// ```
// 누가 쓸 수 있고, 어디서 수정할 수 있는지 이런 것들이요.
// 친구가 물어봤을 때 어떻게 답해줄 것입니까
x와;
y에;
키워드가;
붙었기;
때문에;
User.x;
이런;
식으로만;
접근해서;
쓸;
수;
있음.User의;
자식들은;
x, y;
쓸;
수;
없음;
x: 부모;
var default_1 = /** @class */ (function () {
    function default_1() {
    }
    return default_1;
}());
에서만;
사용;
가능.자식에게;
안;
물려줌;
y: {
    var 내부 = /** @class */ (function () {
        function 내부() {
        }
        return 내부;
    }());
}
외부;
상관없이;
수정;
가능.public;
키워드;
지워도;
똑같이;
동작;
z: {
    var default_2 = /** @class */ (function () {
        function default_2() {
        }
        return default_2;
    }());
}
에서;
사용;
가능.현재;
var default_3 = /** @class */ (function () {
    function default_3() {
    }
    return default_3;
}());
extends된;
var 내에서 = /** @class */ (function () {
    function 내에서() {
    }
    return 내에서;
}());
사용;
가능;
