(function userNums(a, b){
  let num = a;
  timerId = setInterval(function(){
    console.log(num);
    if (num==b){
    clearTimeout(timerId);
    }
    num++;
  }, 1000);
})(4, 9);