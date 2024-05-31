// 자료형 (data types)
// Q) 데이터 (변수)의 종류가 무엇인가?
// - Primitive(원시 타입) : string, number, boolean, undefined, null....
// - Object(객체 타입) : Primitive 타입이 아닌 나머지.

// 1. string (문자열)
// - 텍스트 정보, 따옴표 감싸야 함.
// - 숫자, 특수문자도 따옴표 안에 포함 되어있다면 ? -> 문자열이다.

let text = '안녕하세요';
let text2 = '하이!';
let gender = '남성';

console.log(text);
console.log(text2);
console.log(text + text2);

// 문자 + 변수를 동시에 쓰고 싶을 때
console.log(text + "저는 성원입니다. 저의 성별은" + gender + '입니다.!');
console.log(text, text2, "야호");

// tmi) 템플릿 리터럴 (= 문자를 표현하는 새로운 문법)
// (ES6) 백틱(₩)와 달러($), 중괄호 ({}) 조합으로 사용한다.
// - 문자열 내에서 변수와 상수를 간결히 표현
console.log('${text} 저는 성원입니다. 저의 성별은 ${gender} 입니다!.')


// 2. number (숫자형)
// - 정수, 실수
// - 연산이 가능하다. ( + - * / )
let num = 100;
let num2 = 0.12;

console.log(num, num2);
console.log(num + 1); //101
console.log(num * 2); // 200
console.log(num / 2); // 50

// 3. boolean (불리언)
// - true, false (참, 거짓) 두 가지 값만 가지는 데이터.


// 4. null(빈 값)
// "값이 없음"을 의도적으로 명시
let temp = null;
console.log(temp) //null
temp = "hello~";
console.log(temp); // hello~


// 5. undefined
// 값도 없고, 타입도 지정되지 않은 상태
let x; // 변수 선언만 했을 때 초기 값으로 undefined 할당
console.log(x); // undefined


// [Quiz]
let q1 = 3;
console.log(q1 - 2);
console.log(q1)


// 6. 배열(Array)
// 배열의 이름 : fruits
// 배열의 요소(아이템) : 배열 안에 있는 데이터 하나하나
// 배열의 위치(인덱스) : 0부터 시작 - zero based numbering

const fruits = ['orange', 'pineapple', 'grape', 'apple'];
console.log(fruits);
console.log(fruits[0]);
// orange
// fruits 배열의 위치가 0인 요소 출력

// Js에서는 배열 요소의 자료형이 달라도 됨!
// why?
// A) Js의 동적 타입 특성으로 인한 유연성. - 느슨한 언어.
const mixedArray = [1, 'Damon', true, {name: 'Sean'}, null] // name: Sean -> 객체
console.log(mixedArray);

// Array 안에 Array 들어갈 수 있음 (중첩 가능) => 2차원 배열
const korean = [
    ['가', '나', '다'],
    ['라', '마', '바'],
    ['사', '아', '자'],
];
console.log(korean);

// 가자 글씨 출력하기
console.log(korean[0][0] + korean[2][2]);
console.log(korean[2][0] + korean[0][2]);

const nums = [
    [
        [1,2,3],
        [4,5,6],

    ],
    [
        [7,8,9],
        [10,11,12],

    ],

];
console.log(nums[1][0][1]);

// 7. 객체(object) (key: value)
// - 프로그래밍에서 실제 존재하는 개체나 개념을 표현하는 데이터 구조.
// - 속성과 메서드로 구성.
// - *속성
// - 키(key)와 값(value)의 쌍으로 이루어져 있다. - 상태나 특징.
// - *메서드
// - 함수(function)를 값으로 가진다. - 동작이나 행위.

const cat = {
    name : '장화', // "name"이 key, "장화"가 값(value). 
    age : 10,
    isCute: true,
    mew: function() {
        return  '냐옹';
    }
}
console.log(cat); // object 자체를 출력.;

// 객체(object)의 속성(Key)에 접근하는 속성
// #1. 점 표기법 (.)
console.log(cat.name); // 장화 출력
console.log(cat.age); // 10 출력

// #2. 대괄호 표기법 ([])
console.log(cat['name']);

// #3. Key가 변수에 저장되어 있을 때 사용법
const temVal = 'name';
console.log(cat[temVal]); // 장화 출력 -> 변수명을 삽입

// -----------------------------------------


 const person = {
    name : '이몽룡',
    age : 18,
    like : ['강아지','고양이'],
    isMarried : true,
    girlFriend : {name : '성춘향', age: 16}
 }

console.log(person.age);
console.log(person.girlFriend);
console.log(person[like]);
console.log(person[isMarried]);
console.log(person.name);


// 8. typeof : 자료형을 확인할 수 있는 키워드
// typeof X 형식
console.log(typeof '문자');
console.log(typeof 3.14);
console.log(typeof true);
// 초기 구현 중 하나로서, null 값을 object로 분류하는 것은 공식적으로 인정한 언어의 특징
console.log(typeof person); // object


let mathScore = prompt('수학점수 입력');
let engScore = prompt('영어점수 입력');
let middleScore = (Number(mathScore) + Number(engScore)) / 2;
console.log(middleScore);

// true / false 는 숫자로 1,0

let n1 = true;
let n2 = false;
let n3 = 123.9;

console.log(parseInt(n3, 10));
// n3의 값을 10진수의 정수(int)로 바꾸겠다. 
console.log(parseFloat(n3));
// n3의 값을 실수(float)로 바꾸겠다. 

// +) null, undefined를 숫자로 바꾼다면?
console.log(Number(undefined), typeof Number(undefined))
// NaN = Not - A - number (숫자가 아님)
// 정의 되지 않은 값이 숫자로 변환 될 수 없기 때문! 
console.log(Number(null), typeof null);


let mathScore_1 = Number('77');
let engScore_1= Number('88');
let middleScore_1 =(mathScore + engScore) / 2;
console.log(middleScore_1);