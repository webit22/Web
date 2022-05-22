// Event Listener 를 통해 로또 번호 가져오는 이벤트 수행.
document.addEventListener("DOMContentLoaded", () => {
  let doc = document.querySelector("#start");

  // 최종 당첨번호 6개를 담을 배열
  let lotto = [];

  for (let i = 0; i < 6; i++) {
    let num = parseInt(Math.floor(Math.random() * 45)) + 1;
    if (lotto.indexOf(num) < 0) {
      lotto[i] = num + " ";
    }
  }

  doc.innerHTML = `당첨 번호 : ${lotto}`;
});
