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
type PositionX2 = {x : number}
type NewType = PositionX & PositionY;
type NewType2 = PositionX & PositionX2;

let position : NewType = {x: 10, y:20}
let position2 : NewType2 = {x: 20}

//이 타입은 object 자료형이어야합니다.
//이 타입은 color 라는 속성을 가질 수도 있으며 항상 문자가 들어와야합니다. 
//이 타입은 size 라는 속성이 있어야하며 항상 숫자가 들어와야합니다.
//이 타입은 position 이라는 변경불가능한 속성이 있어야하며 항상 숫자가 담긴 array 자료가 들어와야합니다.  
type ThatType = {
    color? : string , 
    size : number, 
    readonly position :number[]
};

//대충 이렇게 생긴 object 자료를 다룰 일이 많습니다. { name : 'kim', phone : 123, email : 'abc@naver.com' }
//object 안에 있는 이름, 전화번호, 이메일 속성이 옳은 타입인지 검사하는 type alias를 만들어봅시다.
//각 속성이 어떤 타입일지는 자유롭게 정하십시오. 
type ConfirmData = {name : string, phone : number, email : string}

//이름, 전화번호, 이메일, 미성년자여부 속성을 옳은 타입인지 검사하는 type alias를 만들어봅시다.
//미성년자 여부 속성은 true/false만 들어올 수 있습니다. 
// type alias를 재활용
type addAdult = {adult : boolean}
type ConfirmData2 = ConfirmData & addAdult;


//literal types
let 이름3 : 'kim';
이름 = "kim";

function 함수1(a : "hello"): 1 | 0 {
    return 1;
    // return 32;
}

function rcp(a : "가위" | "바위" | "보") : ("가위" | "바위" |"보")[] {
    return ["가위","보"];
}

// as const
let 자료 = {
    name : "kim"
} as const;
// object value 값을 그대로 타입으로 지정
// object 속성들 모두에 readonly 붙임

function myFunc2(a: "kim") {

}

myFunc2(자료.name);