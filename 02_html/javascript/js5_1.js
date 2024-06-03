function condition_score() {
    let inputScore = prompt('숫자를 입력하세요');
    
    if(Number(inputScore) % 13 === 0 && Number(inputScore) / 2 === 1) {
        console.log("13배수이면서 홀수입니다.")
    } else {
        console.log("조건에 맞지 않는 숫자입니다. 올바른 숫자를 입력해주세요!");
    }
}

let result = condition_score();

// ---------------------------

let sum = 0;
for (i=0; i<100; i++){
    if(i % 2 == 0 || i % 5 == 0){
        sum += i;
    }
}
console.log(sum);

// -----------------------------

// 내장 메서드란?
// - 프로그래밍 언어나 프레임워크에서 기본적으로 제공되는 메서드.
// - 따로 설치하거나 추가 설정할 필요 x 

// 문자열 관련 내장 메서드
// - 문자열을 다루는데 유용한 기능들을 제공.

let str = 'Happy Birthday'
let str2 = '       Happy Birthday        '

//문자열 인덱싱
console.log(str[0]); //
console.log(str[0] + str[12]); // Ha

console.log(str[0] + str[1] + str[8] + str[11]); // Hard

// 문자열의 길이(length는 메서드가 아닌 속성입니다.)
console.log(str.length);
console.log(str2.length);

// 대/소문자 변환
console.log(str.toUpperCase()); // 소문자를 대문자로
console.log(str.toLowerCase()); // 대문자를 소문자로

// 양끝 공백 제거
console.log(str2.trim());
console.log(str2.trim().length); // 양쪽 공백 제거하고 
console.log('-----------------');

// indexOf() 글자 위치 찾기
// 위치(index): 0부터 시작
// 같은 문자열이 있으면 처음에 나오는 위치
console.log(str.indexOf('y')); 
console.log(str.indexOf('i')); // 존재하지 않는 문자에 대해 검색하면 -1 반환.
console.log(str.indexOf()); // 매개변수에 아무것도 안넣어줄경우도 -1 반환.

// slice() 문자열 자르기
// 음수값이 들어간다면 뒤에서부터 순서를 센다.
console.log(str.slice(10)); // hday - 10번 위치부터 끝
console.log(str.slice(1,5)); // start, end -1 까지 잘라서 추출.
console.log(str.slice(-4)); // 음수는 맨뒤에서 4번째까지.
console.log('-----------------');

// replace() 문자열 바꾸기
console.log(str.replace("p","t")); //두개있을경우 제일 처음있는거만 바뀐다.
console.log(str.replaceAll("p","w"));

// split() 문자열 쪼개기 (배열로 변환)
let str3 = 'dinner'
console.log(str3.split('e')); // ['dinn', 'r']


// repeat()
console.log(str3.repeat(4)); //dinnerdinner와 같이 4번 반복

///////////////////////////////////
// 배열 내장 메서드
let arr = [1,2,3,4,5];
let arr2 = ['quokka', 'dog', 'koala', 'panda'];

console.log(arr);
// How? 배열에 값을 추가하려면? 
arr[5] = 6; // arr 배열의 5번 인덱스에 6이라는 값 추가.
console.log(arr);
arr[8] = 100; // 인덱스를 건너뛰면 빈 값(empty)이 들어가게 됨.
console.log(arr);

// push(): 맨 끝에 요소 추가
arr.push(6);
arr.push(10);
console.log(arr);

// pop(): 맨 끝에 요소 제거
arr.pop();
console.log(arr);

// unshift(): 맨 앞에 요소 추가
arr2.unshift('cat');
console.log(arr2);

// shift(): 맨 앞에 요소 제거
arr2.shift();
console.log(arr2);

// length : 배열의 길이 변환
console.log(arr.length); // 6

// includes(요소): 요소가 있는지 없는지 검사 (true, false)
console.log(arr2.includes('quokka')); // true
console.log(arr2.includes('apple')); // false

// reverse()
console.log(arr.reverse()); // 배열이 반대로 역순으로 바뀜
console.log(arr); // 원본 배열이 변경됨

// join(): join 안의 문자열 기준으로 병합.
console.log(arr2);
console.log(arr2.join(''));
console.log(arr2.join('-'));

console.log('-------------------------------------');

// 메서드 체이닝(method chaining)
// 여러 메서드를 연결해서 사용할 수 있다!
console.log('hello'.split(''));
console.log('hello'.split().reverse().join(''));