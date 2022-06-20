
// 고차함수 (제작자가 만드는 것)
// higher order function
// 알고리즘 제작법


function typeA() {
  console.log("나는 문어")
}


function typeB () {
  console.log ("꿈을 꾸는 문어");
  // typeA();

}

// typeB ();

function typeC (target) {

  target.addEventListener ( "click", function (){})
  target.addEventListener ( "scroll", function (){})
  target.addEventListener ( "wheel", function (){})
  
  
}

// typeC(root);

// 객체로 묶어서 관리한다.

const typeP = {
  objectA:function (Number) {
    console.log(Number);

  },
  objectB:function () {
    
  }
}

// typeP.objectA("hello");

console.log(console);