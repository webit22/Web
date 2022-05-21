// log 함수를 다른 곳에서도 사용하기 위해서
// export를 사용한다.
// const 와 export default를 같이 사용을 하면
// 오류가 발생한다.
// const util = {}; 만들어 주고, 
// 맨 마지막에 export default를 해준다. 
const util = {
    log(data){
        console.log(data);
    }
}

export default util;