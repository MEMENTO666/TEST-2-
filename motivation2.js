

function a() {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      console.log("함수 a()가 실행되었습니다.")
      resolve("오늘은 수요일")
    }, 5000);
  }); //? 생성자함수
}

a()
  .then(function (data) {
    return new Promise(function (resolve, reject) {
      setTimeout(function () {
        console.log("여기는 then 이라는 함수 안에서 실행 된 것입니다.1")
        resolve(data);
      }, 1000);
    });
  })
  .then(function (data) {
    return new Promise(function (resolve, reject) {
      setTimeout(function () {
        console.log("여기는 then 이라는 함수 안에서 실행 된 것입니다.2")
        resolve(data);
      }, 1000);
    });
  })
  .then(function (data) {
    return new Promise(function (resolve, reject) {
      setTimeout(function () {
        console.log("여기는 then 이라는 함수 안에서 실행 된 것입니다.3")
        resolve(data);
      }, 1000);
    });
  })
  .then(function (data) {
    return new Promise(function (resolve, reject) {
      setTimeout(function () {
        console.log("여기는 then 이라는 함수 안에서 실행 된 것입니다.4")
        resolve(data);
      }, 1000);
    });
  })
  .then(function (data) {
    return new Promise(function (resolve, reject) {
      setTimeout(function () {
        console.log("여기는 then 이라는 함수 안에서 실행 된 것입니다.5")
        resolve(data);
      }, 1000);
    });
  })






//todo 위에 resolve("오늘은 수요일")가 콜백함수의 data로 들어가서 1초 뒤에 console에 찍힘.
//todo then이 먼저 실행되고 5초 뒤에  a 함수가 실행되어야 하는데
//todo 5초를 기다려 주고 then이 실행됨, promise라는 약속이 있어서 기다려줌.