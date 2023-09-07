// answer for question 1
function counter(){
   var counter = 0;
   function IncreaseCounter() {
      return counter += 1;
   };
   return IncreaseCounter;
}
var counter = counter();
alert(counter());
alert(counter());
alert(counter());
alert(counter());



// answer for question 2
let count = 0; 
(function () {
  if (count === 0) {
    let count = 1;
    console.log(count);
  }
  console.log(count); 
})();



// answer for question 3
for (var i = 0; i < 3; i++) {
  setTimeout(function log() {
    console.log(i); // What is logged?
  }, 1000);
}



// answer for question 4
function outer(length) {
  function inner(breath){
    return "Area of rectangle is "+ length*breath;
  }
  return inner(10);
}
let rectangle = outer(5);
console.log(rectangle);



// answer for question 5
function outerfun() {
  let count = 0;
  function innerfun(){
    count++;
    console.log(count);
  }
  return innerfun;
}
let counter2 = outerfun();
counter2();
counter2();
counter2();
counter2();



// answer for question 6
var a = 12;
(function () {
  alert(a);
})();



// answer for question 7
var a = 10;
var x = (function () {
  var a = 12;
  return function () {
    alert(a);
  };
})();
x();



// answer for question 8
var globalVar = "xyz";

(function outerFunc(outerArg) {
    var outerVar = 'a';
    
    (function innerFunc(innerArg) {
    var innerVar = 'b';
    
    console.log(
        "outerArg = " + outerArg + "\n" +
        "innerArg = " + innerArg + "\n" +
        "outerVar = " + outerVar + "\n" +
        "innerVar = " + innerVar + "\n" +
        "globalVar = " + globalVar);
    
    })(456);
})(123);