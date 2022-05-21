/**
 * closure (클로저)
 * - 함수가 정의될 때의 렉시컬 환경을 기억하는 함수를 말한다. (etc)
 * - 함수가 호출된 이후에도 메모리에 값이 존재해 외부에서 접근할 수 있는 방법 (나)
 * - 일반적으로 접근할 수 없는 것에 접근하는 효과
 * - 변수를 은닉하여 지속성을 보장할 수 있다
 * - JS의 모든 함수는 closure를 정의할 수 있다.
 */

//  function generalFunc(){
//     let count = 0;
//     count++;
//     return count;
// }

// // generalFunc() 안의 count변수에는 직접 접근 불가능
// // 함수가 실행한 이후에 함수에 있는 값들은 메모리에서 사라진다.
// console.log(generalFunc()); // 1 (o)
// console.log(generalFunc()); // 2 (x), 1 (o)

//-------------------------------------------------

// < Closure 형태의 함수가 동작하는 방식 >
// 함수가 실행된 이후에도 값이 남아있어서 외부에서 접근이 가능한 방법.
// member field private 같은 형태로 사용하려고.

// function createCounterClosure(){
//     let count = 0;

//     // return 안에 함수 재정의 -> 객체 값 1개 반환
//     return {
//         increase : function(){
//             count++;
//         },
//         getCount : function(){
//             return count;
//         }
//     }
// }

// const count1 = createCounterClosure();
// const count2 = createCounterClosure();

// // 1번째 increase 된 후에 메모리에서 삭제되지 않으므로 1,
// // 2번째 increase 된 후에는 2로 올라가게 됨.
// count1.increase();
// count1.increase();
// console.log("counter1의 값 : " + count1.getCount());

// count2.increase();
// console.log("counter2의 값 : " + count2.getCount());

// ----------------------------------------------------


/**
 * Promise
 * : ES2015(es6)에서 비동기 처리를 하기위한 객체
 * - Promise는 객체로서 언젠가 완료될 일을 나타낸다.
 * - 완료되면 하나의 값을 결과로 반환하는데
 * - 정상적인 결과(resolve) OR 실패한 결과(reject)를 반환할 수도 있다.
 * 
 * Promise 객체는 다음과 같은 세 가지 상태를 가진다.
 * 1) 대기중(pendding) : 아직 결과가 없는 상태, 약속을 했지만 아직 약속에 대한 결과가 나오지 않은 상태
 * 2) 이행됨(fullfilled) : 비동기 처리가 성공적으로 완료되어 약속을 이행한 상태.
 *                       이 때, 결과로서 하나의 값이 전달됨.
 * 3) 거부됨(rejected) : 비동기 처리가 실패한 상태. 약속이 거부되고 그 결과로 거절된 이유를 전달.
 */

/**
 * Promise 객체는 두 가지의 메소드를 가진다.
 * 1) then(onFullField, onReject)
 *      - Promise가 완료됐을 때 호출될 함수를 정리
 *      - 이 때, 첫 번째 인자로 전달되는 함수는 약속이 성공적으로 이행됐을 때 호출
 *      - 두 번째 인자로 전달된 함수는 거부됐을 때 호출
 *      - 두 전달 인자 함수들은 매개변수를 가지는데 각각의 결과가 매개변수를 통해 전달된다.
 * 2) catch(onReject)
 *      - Promise가 거부됐을 때 호출될 함수(onReject)를 등록한다.
 */

// function promiseForHomework(mustDo){
//     return new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//             console.log("doing homework~~~");
//             // mustDo 해야할 일이 들어오면 -> resolve 호출
//             if(mustDo){
//                 resolve({
//                     result: 'homework-result'
//                 });
//             }else{
//                 reject(new Error("Too lazy~!!"));
//             }
//         }, 1000);
//     });
// }

// // 함수에게 true 값을 전달 -> promiseA 출력완료! 뜬 후 3초 뒤에
// // doing homework~~~ 가 뜬다.
// const promiseA = promiseForHomework(true);
// console.log("promiseA 출력완료!");

// const promiseB = promiseForHomework();
// console.log("promiseB 출력완료!");

// // promiseA
// promiseA.then(v => console.log(v));

// // promiseB - catch로 error 잡기 > 내가 작성한 에러메세지 띄움
// // 에러 메세지로 Too lazy~!! 출력하도록
// promiseB
//     .then(v => console.log(v))
//     .catch(e => console.error(e));



// ----------------------------------------------------


const getHen = () => new Promise((resolve, reject) => {
    setTimeout(() => resolve("암탉"), 1000);
})

const getEgg = (hen) => new Promise((resolve, reject) => {
    setTimeout(() => resolve(new Error(`${hen} => 달걀`)), 1000);
})

const cook = (egg) => new Promise((resolve, reject) => {
    setTimeout(() => resolve(`${egg} => 계란후라이`), 1000);
})

// 이렇게 chaining으로 연결하면서 '비동기' 처리를 함!!
// getHen()
//     .then(hen => getEgg(hen))
//     .then(egg => getEgg(egg))
//     .then(meal => getEgg(meal));

// 성공한 경우 : 암탉 => 달걀 => 계란후라이
// getHen()
//     .then(getEgg)
//     .then(cook)
//     .then(console.log);

// 실패한 경우 : 빵 => 계란후라이
getHen()
    .then(getEgg)
    .catch(error => { return "빵" })
    .then(cook)
    .then(console.log);
