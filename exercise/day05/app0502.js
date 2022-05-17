// var hoisting test(var 끌어올리기)
// 어디에 선언했던지 간에 최상위로 끌어올려서 실행
// 영역도 {}안에서만 사용이 되는데, 블록도 무시한다.
// console.log(testVar); // undefined

// var로 선언되어 있지 않아도
// 변수명 = 값 이렇게 할당이 되면
// var testVar = 2; 로 할당된 것처럼 동작한다.
// 즉, var testVar; 라고 따로 선언해줄 필요 없음!
// testVar = 2;
// console.log(testVar); // 2

// error 발생 : 아래에서 선언되어있지 않고, 위에서 호출할 경우 error!
// console.log(testVar3);
// testVar3 = 10;

// error 발생X but, undefined 가 뜬다.
// 선언은 되었으니 값은 출력한 후에 세팅되기 때문에 undefined
// console.log(testVar4);
// testVar4 = 10;
// var testVar4;

// local variable
// {} 안에서만 사용 가능
//
// {
//   let age = 20;
//   console.log("inner" + age);
// }
// console.log("outer" + age);

{
  age2 = 30;
  var age2;
}
console.log(age2);
