// 리스너 : "해당 event가 다 끝난 후에 DOMContent를 load해라" ?
// 내가 사용하려는 이벤트 : DOMContentLoaded
document.addEventListener("DOMContentLoaded", () => {
  //   alert("잘 들어오네요!");
  let doc = document.getElementById("start");
  doc.innerHTML = "프로그래밍으로 처리";
});
