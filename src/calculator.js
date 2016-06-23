function add(x, y) {
  return x + y;
};

function subtract(x, y) {
  return x - y;
};

function multiply(x, y) {
  console.log("x is >>>", x, "y is >>>", y);
  return x*y;
};

function divide(x, y) {
  return x/y;
};

function square(x) {
  return x*x;
};

function squareRoot(x) {
  return Math.sqrt(x);
}

//

var firstInteger = undefined;
var secondInteger= undefined;
var operatorSelected = undefined;
var calcResult;

function enterButtonHandler(){
  if (firstInteger === undefined) {
    firstInteger = $input.val();
    alert("enter first integer");
  } else if (operatorSelected === undefined) {
    alert("select operator");
  } else if ($input.val === "") {
    alert("select second integer");
  } else {
    console.log(firstInteger)
    console.log(secondInteger)
      calcResult = window[operatorSelected](firstInteger, secondInteger);
      console.log(operatorSelected)
      console.log(calcResult);
      firstInteger = undefined;
      secondInteger= undefined;
      operatorSelected = undefined;
    };

  }


function clickHandler(x){
  firstInteger = $input.val();
  operatorSelected = event.target.id;
  console.log(event.target.id)
  $input.val("");
};

//get DOM elements

var $input = $("#input");

$input.bind('keypress', function(e) {
  if(e.keyCode==13){
  secondInteger = $input.val();
   enterButtonHandler();
  }
});

var $elMultiply = $("#multiply");
$elMultiply.click(clickHandler);

var $elAdd = $("#add");
$elAdd.click(clickHandler);

var $elSubtract = $("#subtract");
$elSubtract.click(clickHandler);

var $elDivide = $("#divide");
$elDivide.click(clickHandler);

var $elSquare = $("#square");
$elSquare.click(clickHandler);

var $elSquareRoot = $("#squareRoot");
$elSquareRoot.click(clickHandler);


