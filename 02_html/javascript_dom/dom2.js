//JS 표준 내장 객체
// - 기본적으로 미리 정의된 객체
// - 모든 JS환경에서 사용할 수 있는 내장 객체들을 말한다.
// - 자주 사용되는 기능을 미리 구현해 놓은 것.

// #1. Date 객체 : 시간, 날짜

// 날짜 생성하여 저장.
let now = new Date();
console.log(now);

// new Date(timestamp)
let jan_01_1970 = new Date(0);
console.log(jan_01_1970);

// 참고) 타임스탬프(timestamp)
// : 1970. 1.1 기준으로 흘러간 밀리초(ms)를 나타내는 정수
// "에포크"? - 특정 시간의 기준점
// Q2) why? 이 시간 이후인가요?
// A) 1. 역사적인 이유? - 유닉스 os에서 타임스탬프를 측정하는데 사용된 날짜 초기 컴퓨터 
//    2. 기술적인 편의성 - 시간을 숫자로 표현하는 방법. 수학적으로 편리한 계산을 가능하게 


// 관련 메서드
// 객체 점 접근법
// getDate(): 월의 몇 번째 날인지 반환합니다
// getDay(): 주의 몇 번쨰 날인지 반환합니다. (0부터 시작)
// getMonth(): 몇 번째 달인지 반환합니다. (0부터 시작)
// getHours(): 시간을 반환합니다. (0부터 23까지)
// getMinutes() : 분을 반환합니다. (0부터 23까지)
// getSeconds() : 초를 반환합니다. (0부터 23까지)
// getMillisecons() : 밀리초를 반환합니다. (0부터 999까지)
// getTime(): 1970.1.1 현재까지의 밀리초 단위의 시간을 반환합니다.

console.log(now.getFullYear()); // 2024
console.log(now.getMonth()+1); // 0 - 11 주의
console.log(now.getDate()); // 3
console.log(now.getHours()); // 13
console.log(now.getMinutes()); // 38


// Math 객체
// 수학적인 상수와 함수

// 속성
console.log(Math.E); // 자연로그
console.log(Math.PI); // 파이

console.log(Math.min(100, -2,0,5)); // 네개중 최소값 <-> 반대값 max
console.log(Math.round(5.3124)); // 5 -> 반올림
console.log(Math.ceil(5.3124)); // 6 -> 강제 올림
console.log(Math.floor(5.7234)); // 5 -> 강제 내림
console.log(Math.random()); // 0 <= x < 1 범위의 난수

// Math.random() 응용 예시
// 0 ~ 9 
console.log(Math.floor(Math.random() * 10));

// 퀴즈 (실습)
// Q1) 1 ~ 100
console.log(Math.floor(Math.random() * 100)) + 1;
// Q2) 20 ~ 22
console.log(Math.floor(Math.random() * 3)) + 20;
