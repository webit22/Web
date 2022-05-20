import PolytechLec from "./PolytechLec.js";
import util from "./utility.js";

const root = document.querySelector("#root");
root.innerHTML = `<p>Hello World</p>`;
util.log("내가 만든 임포트 익스포트 데이터");

// util.log(getTime());
// util.log(getCurrentHour());
// util.log(`getTime is ${getTime()}`);
// util.log(`current hour is ${getCurrentHour()}`);

// const logger = new MyLogger2();
// log(`lectures of Poly are ${logger.getLectures()}`);

// pt = polytech
const pt = new PolytechLec();
util.log(`current hour is ${pt.getCurrentHour()}`);
util.log(`lectures of Polytech are ${pt.getLectures()}`);
