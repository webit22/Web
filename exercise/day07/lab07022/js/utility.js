// log함수를 다른 곳에서도 사용하기 위해 export를 사용한다
// export default 와 const 를 같이 쓰면 오류 발생함.
// const util = {}; 만든 후, 따로 util 빼서 맨 마지막에 export default 선언해줌.

const util = {
  log(data) {
    console.log(data);
  },
};

export default util;
