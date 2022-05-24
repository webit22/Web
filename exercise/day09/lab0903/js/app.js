// MainController와 연결한다.
import MainController from "./controllers/MainController.js";

document.addEventListener("DOMContentLoaded", () => {
    // console.log('app.js');
    MainController.init();
});