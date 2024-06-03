// console.log(document.domain);
// * 취소선이 그어지는 이유
// - 해당 속성의 사용을 권장하지 않거나, 더 이상 지원되지 않을 가능성을 나타냄.
// - 최신 보안 정책에서는 도메인 사용한 접근 제어 방식이 보안상 취약할 수 있기 때문에 지양한다.

// document 객체를 이용해 html "요소 선택"
// 1. getElementById
console.log(document.getElementById('green'));
console.log(document.getElementById('red'));

// 2. getElementsByClassName (HTMLcollection)
console.log(document.getElementsByClassName("pink"));
console.log(document.getElementsByClassName("pink")[1]);

// 3. getElementsByTagName (HTMLcollection)
console.log(document.getElementsByTagName('div'));

//4. getElementsByName (NodeList)
console.log(document.getElementsByName('id'));

// 5. querySelector(css selector)
// - 처음 발견한 하나만 가지고옴
console.log(document.querySelector('.pink'));
console.log(document.querySelector('.others'));
console.log(document.querySelector('#green'));
console.log(document.querySelector('div'));
console.log(document.querySelector('[name="id"]'));


// 6. querySelectorAll(css selector) (NodeList)
// - 선택자에 해당되는 모든 요소를 선택
console.log(document.querySelectorAll('[name="id"]'));

// * 유사배열 (HTMLcollection, NodeList)
// [] 식으로 생긴 배열을 의미, 배열은 아님!
// index, length는 가짐
// 배열과 달리 사용 가능한 메서드가 제한

// NodeList -> forEach() 반복문 사용 가능.
document.querySelectorAll('.pink').forEach((elem) => console.log(elem));

// HTMLcollection -> forEach() 메서드 사용 X
// 반복을 해야된다? -> Array 변경 (Array.from())
Array.from(document.getElementsByClassName('pink')).forEach((elem)=> console.log(elem));

// for of 반복문도 가능합니다.
const pinks = document.querySelectorAll('.pink');
for (let pink of pinks) {
    console.log(pink);
}

// 태그 내부 내용 변경
// innerHTML : 태그 사용 가능
// innerText, textContent : 태그가 문자(기호)로 그대로 노출.

console.log("innerText >", div1.innerText);
console.log("textContent >", div1.textContent);

// #innerText와 textContent
// # 공통점 
// - 둘 모두 텍스트를 추가한다.
// # 차이점
// innerText = HTML 태그를 해석하지 x, 보여지는 텍스트만 그대로 
// textContent = HTML 태그를 포함하여 처리

div1.innerText = "여기는 <b>두번째</b> 태그!"
console.log(div1);
div1.textContent = "여기는 <b>세번째</b> 태그!"
console.log(div1);

// 속성(attribute) 변경
// setAttribute(속성명, 변경할 속성 값) => 속성 값을 "설정"
// getAttribute(속성명) => 속성 값 "얻기"
// # 참고! 속성 접근 (.) 연산자로도 가능
// # 참고2! .연산자로 속성에 접근하고 = 할당 연산자로 속성 값 변경 가능
document.getElementById('naver').href = '#'; // 내부 앵커 // 현재 페이지의 상단으로 

// CSS 지정
const h1 = document.querySelector('h1');
const list = document.querySelectorAll('ul > li') // 유사배열 


// CSS 지정
// #1. style 속성
// style 속성을 이용해 css 지정 가능
// style.XXX(xxx.camelCase)

list[0],style.backgroundColor = 'purple';
list[0].style.fontSize = '20px';
list[0].style.color = 'yellow';

for (let li of llist) {
    // 반복문 적용해서 사용할 수 있다.
    // li.style.backgroundColor = 'purple';
}

// #2. classList 활용
// xxx.classList.add
// xxx.classList.remove
// xxx.classList.contains : 있는지 없는지 확인 (t/f)
// xxx.classList.toggle : 있으면 제거, 없으면 추가

h1.classList.toggle('add-h1');
console.log(h1.classList.contains('add-h1'));
h1.classList.toggle('add-h1')

// 요소 찾기
// 계층 구조(형제, 자식, 부모, 조상, 자손)
const friends = document.querySelector('#friends');
const tigger = document.querySelector('#tigger');

// 1. 자식 요소
console.log(friends.children); //유사 배열, 자식 모두 선택
console.log(friends.children[0]); // 인덱스 접근.

// 2. 부모 요소
console.log(tigger.parentNode);
console.log(tigger.parentNode.parentNode); // 조상

// 3. 형제 요소
console.log(tigger.previousElementSibling); // 이전
console.log(tigger.nextElementSibling); // 다음



