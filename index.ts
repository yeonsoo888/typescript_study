let name1 : string = "kim";
let arrName : string[] = ['kim',"park"]
let objName : {name? : string} = {name : "kim"}

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