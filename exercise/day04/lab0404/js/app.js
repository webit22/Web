/*
JavaScript
- web에서 동적으로 데이터나 DOM을 조작하기 위한 언어
- web에서 사용하는 client(WebBrowser) 및 서버(Node.js)용 언어

JavaScript
- 현재는 JavaScript library나 framework와 함께 사용된다
- JavaScript(VanillaJS)
- Angular(Google) - React.js(Meta, facebook ; 현재 가장 많이 쓰임) - Vue.js(EvanYou) 
    - Typescript(얘도 많이 쓰임) - Svelte
- jQuery : Java에서 Spring Framework 의 역할과 비슷함.
            역할상 Javascript가 해야할 많은 내용을 간단하게 
            사용할 수 있도록 구현된 library
*/

// javascript에서 일반적으로 말하는 객체
// javascript에서 중요한 것은 객체를 구성하는 모양
// 아래와 같은 형태의 객체는 가장 일반적이기도 하지만,
// 이를 literal(값) 형태의 객체 라고 부름
// 아래 예제에서는 coffee 가 객체.
// let coffee = {
//   type: "latte",
//   price: 5500,
// };

// 값을 변수에 대입해서 출력해보는 방법
// let coffeeType = "latte";
// let coffeePrice = 5500;
// console.log(coffeeType);
// console.log(coffeePrice);

let coffee = {
  type: "Americano",
  price: 4000,
};
// literal 객체에서 값을 가져오는 방법
// console.log(coffee.type);
// console.log(coffee.price);
console.log(coffee["type"]);
console.log(coffee["price"]);

// literal 객체에 없는 속성을 가져올 경우 -> undefined 출력
// console.log(coffee.name);

// 그냥 빈 객체를 선언할 경우 -> {} 출력
// let obj = {};
// console.log(obj);

// 변수나 객체를 선언할 때 사용하는 선언자
// let : 값을 다시 할당해도 되고, {} 안에서만 값이 유용하다 (local variable).
// const : 변하지 않는 상수 값을 정의할 때 사용한다 ()
//          const로 선언한 변수에 값을 다시 할당하게 되면 오류가 발생한다.
//          const PI = 3.14, const LOCAL_URL = "https://www.daum.net";
const coffee1 = {
  type: "capuccino",
  price: 6000,
};

// javascript를 사용할 때 맨 마지막 문장에는 ';'를 붙여준다.
// ';'를 안쓴다면 js가 엔터를 만났을 때 다음 문장으로 인식함
// 성능때문에 js의 용량을 최소로 줄이는 경우가 발생할 수 있기 때문에
// 맨 마지막에는 ';'을 붙이는 것이 좋다.
// console.log("hi!");

// javascript 에서는 대소문자를 반드시 구분하기! 대소문자가 같으면
// 컴파일러가 같은 객체로 인식함.
console.log("hi~~!");
console.log("Hi~~!");
