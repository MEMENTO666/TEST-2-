let dropdownButton = function () {


}

let dropdownWrappers = document.getElementsByClassName();

// 문서에서 클래스를 가지고 왔다.

let activeDropdowns = [];
// 배열만 선언
// 원소가 없는데 왜 선언

for (let i =0; i < dropdownWrappers.length; i++) {
  // for 문으로 해당하는 클래스를 제어하려고 한다.
  if (dropdownWrappers[i].classList.contains("active")) {
    //if문 조건식이 클래스를 가지고 있는지 여부를 판단.
  }

  for (let c=0; c <dropdownWrappers[i].getElementsByClassName("js-button-dropdown").length; c++) {
    // 문서에 있는 클래스를 가지고 for( ) 를 loop함.
  }
  
  
}

function hideDropdowns(activeDropdowns){
  //드롭 다운을 숨기는 기능? (유추)
  //매개 변수가 배열, 반복문을 돌려서 클래스를 지우는 작업을 한다.
  ("active");
}

function toggleDropdown () {
  // 토글 하려고
  // this 는 무엇인가.
  // for()
  // loop 를 돌려서 무언가 하고있다.
  
  for(let i=0; i <activeDropdowns.length; i++);
}

// return : 무언가 반환함.

// { } 중괄호는 무조건 객체(?)
// ?

