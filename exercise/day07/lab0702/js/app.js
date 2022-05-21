import {log,getTime,getCurrentHour,MyLogger2} from './myLogger.js';

const root = document.querySelector("#root");
root.innerHTML = `<p>Hello World</p>`;
log("내가 만든 임포트 익스포트 데이터");

log(getTime());
log(getCurrentHour());
log(`getTime is ${getTime()}`);
log(`current hour ${getCurrentHour()}`);

const logger = new MyLogger2();
log(`lectures of Poly are ${logger.getLectures()}`);