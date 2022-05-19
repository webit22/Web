// 이벤트 처리 순서
// 1) 객체를 찾고(element, object)
// 2) 이벤트를 생성하고
// 3) 객체에 붙인다. (AddEventListener)

// 이벤트 처리 방법
// 1) 이벤트 처리기를 등록하는 방법
// <input type="button" onclick="changeColor()"/>

// 2) DOM 요소 객체의 이벤트 처리기 프로퍼티에 설정
// // getElementById() 보다 querySelector()를 더 많이 씀!
// const btn = document.getElementById("btn"); // id
// const btn = document.querySelector("#btn"); // # : id를 의미
// const btn = document.querySelector(".colorBox"); // . : class를 의미
// btn.onclick = changeColor();

// 3) addEventListener 메소드 사용 방법
// const btn1 = document.getElementById("btn"); // id
// const btn1 = document.querySelector("#btn"); // # : id를 의미
// const btn1 = document.querySelector(".colorBox"); // . : class를 의미
// btn1.addEventListener("click", () => {
//     // 처리할 이벤트 내용 작성
// });

document.addEventListener("DOMContentLoaded", () => {
  //   alert("잘 들어오나?");
  // 보통 여기 안에다가 변수 선언 시 const 많이 씀
  const boxEle = document.querySelector("#box");
  const colorBtnEle = document.querySelector(".colorBtn");
  const btnEle = document.querySelector("button");

  //   각각의 element에 이벤트를 연결시켜준다. 마우스로 각 결과 라인을 클릭해야 색상 바뀜
  // "click" 은 API document에 정의되어 있으므로 절대 오타나면 안됨!
  boxEle.addEventListener("click", function (e) {
    e.currentTarget.style.backgroundColor = "red";
  });
  colorBtnEle.addEventListener("click", function (e) {
    e.currentTarget.style.backgroundColor = "blue";
  });
  btnEle.addEventListener("click", function (e) {
    e.currentTarget.style.backgroundColor = "gray";
    e.currentTarget.style.padding = "10px 20px";
  });
});
