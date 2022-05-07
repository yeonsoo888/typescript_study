let name1 : string = "kim";
let arrName : (string | number)[] = ['kim',"park"]
let objName : {name? : (string | boolean)} = {name : "kim"}

// union type
let 이름 : string | number = 'kim'
이름 = 9;

// type을 변수로
type MyType = string | number;
let 이름2 : MyType = "park";

// function param 타입지정
function 함수(a:boolean) : number/* return값 타입지정 */ {
    if(a) {
        return 2;
    } else {
        return 3;
    }
}

// tuple타입 - array만 사용가능
type Member = [number, boolean];
let kim:Member = [20,true];

// object 타입 속성이 너무 많을경우
/*
type ObjMember = {
    name: string,
    gender: string,
}
*/
type ObjMember = {
    [key: string] : string,
}

let yeonsoo: ObjMember = {
    name: "kim",
    gender: "male",
}

// class문법 type지정
class User {
    name: string;
    constructor(name:string) {
        this.name = name;
    }
}

//narrowing
function myFunc(x: number | string) : (number | string) {
    if(typeof x === "number") {
        return x + 2;
    } else if (typeof x === "string") {
        return x;
    } else {
        return 0;
    }
}

//type alias
type Animal = string | number | undefined
type Animal2 = {name : string , age : number}

let animal : Animal;
let animal2 : Animal2 = {name : "kim", age : 20}

// object readonly 속성
type Girfriend = {
    readonly name? : string
}
const girfriend : Girfriend = {
    name : "ember"
}
// const object의 값 변경 막기 , 하지만 에러만 있을뿐 변경 가능함.
// girfriend.name = "유라";


// type alias extend 하기
type Name = string;
type Age = number;
type Person = Name | Age;

type PositionX = {x : number};
type PositionY = {y : number};
type NewType = PositionX & PositionY;

let position : NewType = {x: 10, y:20}