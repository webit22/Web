// lotto 만들기 - 0517 과제랑 비교해보기
const SETTING = {
  name: "lotto",
  count: 6,
  maxNum: 45,
};

function playLotto() {
  const lottoset = new Set(); // Set() : 중복 제거해줌
  const { count, maxNum } = SETTING;
  while (lottoset.size < count) {
    const randomNumber = parseInt(Math.random() * maxNum, 10);
    lottoset.add(randomNumber);
  }
  return Array.from(lottoset);
}

// 정렬 안됨
console.log(playLotto());

// 정렬됨
console.log(playLotto().sort((a, b) => a - b));

// 역순으로 정렬됨
console.log(playLotto().sort((a, b) => b - a));
