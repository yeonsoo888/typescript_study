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
//narrowing
function myFunc(x) {
    if (typeof x === "number") {
        return x + 2;
    }
    else if (typeof x === "string") {
        return x;
    }
    else {
        return 0;
    }
}
var animal;
var animal2 = { name: "kim", age: 20 };
var girfriend = {
    name: "ember"
};
var position = { x: 10, y: 20 };
var position2 = { x: 20 };
//literal types
var 이름3;
이름 = "kim";
function 함수1(a) {
    return 1;
    // return 32;
}
function rcp(a) {
    return ["가위", "보"];
}
// as const
var 자료 = {
    name: "kim"
};
// object value 값을 그대로 타입으로 지정
// object 속성들 모두에 readonly 붙임
function myFunc2(a) { }
myFunc2(자료.name);
var 함수2 = function () {
    return 2;
};
//object 자료 안의 함수 타입지정 (methods)
var 회원정보 = {
    name: "kim",
    plusOne: function (a) {
        return a + 1;
    },
    changeName: function () {
    }
};
회원정보.plusOne(1);
var cutZero = function (str) {
    if (str.substring(0, 1) == "0") {
        return str.substring(1);
    }
    return str;
};
var removeDash = function (str) {
    return parseFloat(str.replace(/-/g, ""));
};
var newFunc2 = function (a, func1, func2) {
    var result = func1(a);
    var result2 = func2(result);
    console.log(result2);
};
newFunc2("010-1111-2222", cutZero, removeDash);
