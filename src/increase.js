function increase(number) {
  const promise = new Promise((resolve, reject) => {
    //resolve는 성공, reject는 실패
    setTimeout(() => {
      const result = number + 10;
      if (result > 50) {
        //50보다 높으면 에러 발생
        const e = new Error('NumberIsTooBig');
        return reject(e);
      }
      resolve(result);
    }, 1000);
  });
  return promise;
}

increase(0)
  .then((number) => {
    //promise에서 resolve된 값은 .then을 통해 받아옴
    console.log(number);
    return increase(number);
  })
  .then((number) => {
    console.log(number);
    return increase(number);
  })
  .then((number) => {
    console.log(number);
    return increase(number);
  })
  .then((number) => {
    console.log(number);
    return increase(number);
  })
  .then((number) => {
    console.log(number);
    return increase(number);
  })
  .catch((e) => {
    console.log(e);
  });
