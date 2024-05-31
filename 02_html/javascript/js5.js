// 반복문 

// for문
for (let i = 0; i < 10; i ++){
    // i가 0 ~ 9 총 10번 반복
    console.log('안녕', i);
}

// 1 ~ 5 출력
for(let i = 1; i < 6; i ++){
    console.log(i);
}

// 5 ~ 1 출력
for(let i = 5; i>=1; i --){
    console.log(i);
}

// 1부터 20까지의 합 구하기 // 어떤 숫자까지 합을 구할지 대한 n
// for ~ if중첩
let sum = 0; // 합을 저장할 변수
for(let i =1; i<=20; i++){
    if(i % 2 ===0){
        sum += i; //sum 변수에 값을 재할당(이전 sum 변수의 값 + 현재 반복변수 i 값)
} 
}
console.log(sum);

//while 문
let idx = 0;
while (idx < 10) {
    console.log('안녕', idx);
    idx += 1;
}

// 구구단 while 버전
let i = 2; j = 1

while(i<10){
    while(j<=9){
        console.log(i, "x", j, "=", i*j);
        j++
    }
    i++;
    j=1;
}

for(i=2; i<=9; i++){
    console.log("---",i,"단","---");
    for(s=1; s<=9; s++){
        console.log(i,"*",s,"=",i*s);
    }
}

///////////////
// do ~ while 문
// * JavaScript에서 사용되는 반복문 중 하나로, 조건이 참인지 여부에 상관없이 코드 블록을 최소 한 번 실행한 후 조건을 검사한다.
// 즉) 항상 코드 블록을 한 번 실행한 다음, 조건이 참인 동안 반복을 계속!

// 구문
let g = 1;
do {
    console.log(g);
    g++;
} while(g <= 5);

// ex)2
let number;

do {
    number = parseInt(prompt('숫자를 입력하세요 (10보다 큰 숫자):'),10);
} while (number <= 10)
console.log("입력한 숫자: ", number);

////////////////////////////////////////////////////////
// break & continue
// - 반복문에서 사용되는 제어문. 

// # break
// - 반복문을 중단하고 빠져나옴

// # continue
// - 현재 반복을 중지하고 다음 반복으로 넘어감.

// ex)
for (let i =1; i<=10; i++){
    if(i == 5){
        break;
    }
    console.log(i);
} // 출력결과 : 1,2,3,4

// ex)2
for (let i=1; i<=5; i++){
    if (i===3) {
        continue;
    }
    console.log(i);
}// 출력결과 : 1,2,4,5

