
// 공통 기능을 구현한 View import 한다.
import View from "./View";

// FormView인지를 알 수 있는 태그 구성
const tag = "[FormView]";

// View 객체를 가져와서 copy해서 새로운 Formview를 만든다.
const FormView = Object.create(View);

// Form으로 선언된 것들을 세팅하는 작업
FormView.setup = function(element){
    this.init(element);
    this.inputElement = element.querySelector('[type=text]');
    this.resetElement = element.querySelector('[type=reset]');
    this.showResetBtn(false);
}

FormView.showResetBtn = function(show){
    this.resetElement.display = show? 'block' : 'none';
}

// 외부에서 사용할 수 있도록 export default 처리
export default FormView;
