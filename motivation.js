
function text () {
  return `<div>hello</div>`;
}

function section () {
  return `<section>bye</section>`;
}

// console.log(text());
// console.log(section());

let timerA = setTimeout(() => {
  console.log(text());
  let timerB = setTimeout(() =>{
    console.log(section());
  
  },000);
}, 1000);

//todo 딜레이를 0으로 조정해도 section이 먼저 실행됨.
