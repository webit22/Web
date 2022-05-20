// /**
//  * People
//  * this.name, this.age 프로퍼티를 갖게 된다.
//  * this 상황에 따라 가리키는 범위가 달라진다. 지금 실행되는 영역의 바로 바깥을 가리킨다.
//  */

// class People {
//   // 생성자는 값을 초기화 할 때 사용한다.
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }
//   show() {
//     //   this.속성명 으로 써야함!
//     console.log(`${this.name}은 ${this.age}살 입니다.`);
//   }
// }

// // 생성자 호출
// const people = new People("김병관", 20);
// people.show();

class Coffee {
  type = "";
  price = 0;
  constructor(type, price) {
    this.type = type;
    this.price = price;
  }

  //   type() 메소드 안에 언더바 없이 그냥 return this.type -> 자기 자신을 계속 불러서 메모리 용량 초과함
  // return this._type 으로 해주면 잘 호출/동작됨
  get type() {
    return this.type;
  }
  set type(value) {
    this.type = value;
  }
}

const coffee = new Coffee("latte", 5000);
console.log(coffee.type);
