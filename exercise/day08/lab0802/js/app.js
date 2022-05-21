/**
 * 생성자 생성
 */
// const card = {};
// card.suit = "heart";
// card.rank = "A";
// console.log(card);


// function Card2(suit, rank){
//     this.suit = suit;
//     this.rank = rank;
// }

// // function의 생성자 형태
// const card2 = new Card2("clover", "A");
// console.log(card2);

// -----------------------------------------

// class Card3{
//     constructor(suit, rank){
//         this.suit = suit;
//         this.rank = rank;
//     }
// }
// // class의 생성자 형태
// const card3 = new Card3("diamon", "2");
// console.log(card3);

/**
 * typeof 연산자
 * - 타입을 확인해서 데이터 타입을 텍스트로 형태로 알려준다.
 * - 객체 : object
 * - string, number, boolean, function
 * - symbol, undefined
 */

// let s = "밥먹고 졸리다.";
// console.log(typeof s); // string

// let s2 = new Array();
// console.log(typeof s2); // object

// let s3 = new Date();
// console.log(typeof s3); // object

// let s4 = 20;
// console.log(typeof s4); // number


// --------------------------------------------

/**
 * instanceof 연산자
 * : 지정한 객체의 프로토타입 체인에 지정한 생성자의
 *   프로토타입 객체가 포함되어 있는지 확인한다.
 * - 프로토타입 -> instance가 존재하느냐를 확인해주는 연산자
 * - 부모의 이름으로 자식을 받을 수 있다(다형성 발생 원리)
 */

function Func(){};
const obj = new Func();

// obj한테 상속된 애는 true, 아니면 false가 출력됨
console.log(obj instanceof Func);   // true
console.log(obj instanceof Object); // true
console.log(obj instanceof Date);   // false



