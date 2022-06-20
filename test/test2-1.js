function typeA () {



} // 전역 스코프

typeA();
//기명 스코프임, (이름이 있다 라는 뜻)


//익명함수 ( anonymous function ) / 함수 (literal) : 직접 새긴다.

const typeB = function () {
  //제작자는 알지만 외부 사람은 모르는 방식 : 권장되는 방식
  
}
typeB();


//arrow function (활살표 함수)
// 함수표현식과 같은 기능
// 축약형 (개발자들이 귀찮다고)
// 특정 작동 때문에

const typeC = () => {}

const typeE =a => {} ///매개변수가 하나일때는 소괄호도 사용 안함

const typeD = function () {}

(function() {}());
//즉시 실행함수


let = test
test.addEventListener("test", testFunction);

function testFunction() {
  // 밖으로 빼낸 콜백함수
  
  
}