// 사용자 아이디 가져오는 방법...?

function test(){
    const res = document.querySelector("#showResult");
    // 보간법 써서 사용자 아이디 데이터값을 showResult 단락에 출력해줌
    const uID = document.querySelector('#userID');
    res.innerHTML = `사용자 아이디는 ${uID} 입니다.`;
}