// target : 현재 함수가 받아오는 파라미터 (현재 내가 가리키는 이벤트 객체)
// -> event : e
// -> target : element(<div>)
// document.querySelector("div").addEventListener("click", function ({ target }) {
//   //   console.log(target.tagName); // <div> tag 자체를 가져옴
//   console.log(target.innerText); // innerText만 가져옴
// });

// document.querySelector("div").addEventListener("click", function ({ type }) {
//   console.log(type); // innerText
// });

/**
 * event의 타입을 확인해보고 싶으면 type이라는 이름을 주고 출력해야한다.
 * target, type 은 지정된 예약어라서 다른 이름으로 받아올 수 없다.
 */

document
  .querySelector("div")
  .addEventListener("click", function ({ type, target }) {
    console.log(type, target.tagName); // innerText

    // eval : 문자, 숫자를 표현
    console.log("eval=", eval(1 + 2));
  });
