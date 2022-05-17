/**
 * 행위와 속성을 나타내는 형태의 객체
 * javascript는 정의를 한 후에 반드시 호출해야 실행됨
 */

const coffee = {
  type: "latte",
  price: 5500,
  makeCoffee: function () {
    console.log(this.type + "//" + this.price);
  },
};
// 함수 호출
coffee.makeCoffee();
