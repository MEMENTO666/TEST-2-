let yoon = 100;

//! 1번 행동에는 yoon이 10이 덧셈되고 콘솔에 출력됨 (110)
//! 2번 행동에는 yoon이 30을 빼고 콘솔에 출력됨. (70)
//? 둘 다 1초 뒤에 실행되어야 한다.


function first () {
  return new Promise((resolve, reject) => {
    setTimeout(function (){
      yoon = yoon + 10;
      console.log(yoon);
      resolve();
    },1000)
  });
}

// first()
//   .then(function(data){
//     return new Promise((resolve, reject) => {
//       setTimeout(function (){
//         yoon = yoon - 30;
//         console.log(yoon);
//         resolve();
//       },1000)
//   });
// })

first ()
  .then(function(data) {
    return new Promise((resolve,reject)=>{
      setTimeout(function (){
        yoon = yoon - 30;
        console.log(yoon);
        resolve()
      },1000)
    });
  });











