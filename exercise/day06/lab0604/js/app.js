// import 키워드로 myLogger.js 파일의 함수를 받아와서
// 실행시키고 값 출력
import { log } from "./myLogger.js";

const root = document.querySelector("#root");
root.innerHTML = `<p>Hello World</p>`;
log("내가 만든 임포트 익스포트 데이터");
