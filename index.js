var name1 = "kim";
var arrName = ['kim', "park"];
var objName = { name: "kim" };
// union type
var 이름 = 'kim';
이름 = 9;
var 이름2 = "park";
// function param 타입지정
function 함수(a) {
    if (a) {
        return 2;
    }
    else {
        return 3;
    }
}
var kim = [20, true];
var yeonsoo = {
    name: "kim",
    gender: "male",
};
// class문법 type지정
var User = /** @class */ (function () {
    function User(name) {
        this.name = name;
    }
    return User;
}());
