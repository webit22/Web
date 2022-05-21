/**
 * People 
 *  this.name 프로퍼티를 갖게 된다. 
 *  this.age  프로퍼티를 갖게 된다.
 *  this 상황에따라 가리키는 범위 달라져요.
 *       지금 현재 실행되는 영역의 바로 바깥을 가리킨다.
 */
// class People{
//     // 생성자는 값을 초기화 할 때 사용한다.
//     constructor(name, age){
//         this.name = name;
//         this.age = age;
//     }
//     show(){ // method
//         console.log(`${this.name}은 ${this.age}살 입니다.`);
//     }
// }
// //                 생성자를 호출!!
// const people = new People("김병관",20);
// people.show();

/**
 * Java 클래스기반 객체지향 언어 
 * JavaScript 프로토 타입 기반 객체지향 언어
 */
// const user1 = {};
// const user = {
//     name = "IU",
//     age = 20
// }
// user.singing = true;
// 객체가 존재하는데, 그 객체에 속성을 추가해서
// 객체를 만드는 방식

// java code - 클래스 기반
// class UserInfo {
//     private String name = "IU";
//     public void setName(String name){
//         this.name=name;
//     }
// }
// UserInfo userInfo = new UserInf();
// userInfo.age = 10; // X 

class Coffee{
    constructor(type,price){
        this.type = type;
        this.price = price;
    }
    getType(){};
    get type(){ // get method
        return this._type;
    }
    set type(value){ // set method
        this._type = value;
    }
}
const coffee = new Coffee("라떼",5000);
console.log(coffee.type);
console.log(coffee.type());