// arrow function(화살표 함수)
// browser에서 테스트 할 수 있는 API이다.
// 항상 이 모양부터 먼저 만들고 시작 : setTimeout(function(){});
// 1000 : 1초 뒤에 "화살표 함수입니다." 가 콘솔창에 뜬다
// setTimeout(function () {
//   console.log("화살표 함수입니다.");
// }, 1000);

// 위에처럼 작성하면 function을 만들어야하므로 좀 더 간단하게 작성해보자.
// setTimeout(() => {
//   console.log("화살표");
// }, 1000);

// 일반 함수
const simpleFunc = function () {
  console.log("simple function");
};
simpleFunc();

// 화살표 함수는 anonymous 함수이다 (argument가 없는 화살표 함수)
const simpleFunc2 = () => console.log("simple2");
simpleFunc2();

// argument가 있는 화살표 함수
// const add = (a, b) => a + b;
// console.log(add(1, 2));

// const add1 = function (a, b) {
//   return a + b;
// };
// console.log(add1(1, 2));

// default parameter (디폴트 파라미터)
// es6 추가
function showMessage(message, from = "IU") {
  console.log(`${message} from ${from}`);
}
// 만약 from 파라미터에게 "adele" 값을 넘기지 않으면 default로 "IU"가 저장됨
console.log(showMessage("hello", "adele"));

// es6 이전 코드
function showMessage2(message, from) {
  if (from == undefined) {
    from = "IU";
  }
  console.log(`${message} by ${from}`);
}
showMessage2("hello", "adele");

/**
 * if문
 *
 * if(조건식){
 *  조건식이 참일 경우 실행되는 부분
 * }
 * 조건식이 거짓일 경우 실행되는 부분
 *
 * if(조건식){
 *  조건식이 참일 경우 실행되는 부분
 * }else{
 *  조건식이 거짓일 경우 실행되는 부분
 * }
 *
 * if(조건식A){
 *  조건식A가 참일 경우 실행되는 부분
 * }else if(조건식B){
 *  조건식B가 참일 경우 실행되는 부분
 * }else{
 *  조건식A,B 둘 다 아닐 경우
 * }
 */

/**
 * 반복문 for문 : 기준값이 존재하고, 일정한 증감값이 있을경우 사용.
 * for(let j = length; j > 0; j--) // 감소
 * for(let i=0; i<length; i++){    // 증가
 *   i=0 부터 length보다 하나 작을 때가지 반복
 * }
 */

/**
 * 반복문 while()
 *
 * while(조건식){
 *     조건식이 참일 경우에만 이 문장을 반복한다.
 * }
 *
 *
 * 반복문 do ~ while()
 * do{
 *    최소한 한번은 이 부분은 실행된다.
 *    그리고 조건식을 만족하게 되면 계속 반복실행
 * }while(조건식);
 */

/**
 * Rest Parameter
 * syntax : ...args
 * Rest 파라미터는 배열 형태로 값을 전달한다.
 */
// function printArr(...args) {
//   for (let i = 0; i < args.length; i++) {
//     console.log(args[i]);
//   }
// }
// printArr("javascript", "java", "spring");

// for... of 값이 있으면 쭉~ 뽑아내라.
function printArr(...args) {
  for (const arg of args) {
    console.log(arg);
  }
}
printArr("javascript", "java", "spring");
