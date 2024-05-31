function condition_score() {
    let inputScore = prompt('숫자를 입력하세요');
    
    if(Number(inputScore) % 13 == 0 && Number(inputScore) / 13 == 0) {
        console.log("13배수이면서 홀수입니다.")
    } else {
        console.log("조건에 맞지 않는 숫자입니다. 올바른 숫자를 입력해주세요!");
    }
}

let result = condition_score();
