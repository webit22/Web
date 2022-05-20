/**
 * arrow function을 확인해 본다.
 * arrow function으로 사용할 API가 setTimeout이라
 * web browser 띄우고 javascript를 실행한다
 */

// this context of arrow function
// const myObj = {
//     runTimeout(){
//         setTimeout(function () {
//             // 지금 이 영역에서의 this는 window
//             console.log(this === window);
//         }, 2000);
//     }
// }
// myObj.runTimeout();

// 자 그럼 이제 다른 코드를 실행해 봅시다.
// const myObj = {
//   runTimeout() {
//     setTimeout(
//       function () {
//         // 현재 이 영역에서의 this는 window를 가리키고 있다.
//         // window.printData()라는 function은 존재하지 않기 때문.
//         this.printData();
//       }.bind(this),
//       1000
//     );
//   },
//   printData() {
//     console.log("print data 출력!");
//   },
// };
// myObj.runTimeout();

// bind() 함수 말고 arrow function을 적용해보자.
// bind()를 생략한 상태에서도 this가 context를 유지하고
// 있다고 생각하면 된다.
// 그래서 print data 출력! 이 나온 것이다.
// arrow function은 context를 유지해주기 때문이다.
const myObj = {
  runTimeout() {
    // arrow function을 적용해보자.
    setTimeout(() => {
      // 현재 이 영역에서의 this는 window를 가리키고 있다.
      // window.printData()라는 function은 존재하지 않기 때문.
      this.printData();
    }, 1000);
  },
  printData() {
    console.log("print data 출력!");
  },
};
myObj.runTimeout();

// bind -> this + 실행context
// arrow function : 쭉 한 번에 읽어들인 후 실행영역(context) -> (x)
