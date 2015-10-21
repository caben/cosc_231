$(document).ready(function() {
  
  var randNum = parseInt((Math.random() * 100 + 1));
  var guessNum; 
  var test;
  var count = 0;
  console.log(randNum);
 
  function isNumber(t) {
    while (t == true) {
      alert("Enter a valid Integer: (1 - 100)");
      guessNum = parseInt($('#guessNum').val());
  	  $('#guessNum').val('');
  	  t = isNaN(guessNum);
  
  	  return;
    }
  	return;
  }
  
  $('button').click(function() { 
  	 guessNum  = parseInt($('#guessNum').val());
  	 test = isNaN(guessNum);
  	 
  	 isNumber(test);
  	 
  	 $('#guessNum').val('');

  	 if(guessNum < randNum ) {
  	   alert("Your guess is lower than the random number: Guess Again!");
  	   $('#guessNum').val('');
  	   test = isNaN(guessNum);
  	   isNumber(test);
  	 }
  	 if(guessNum > randNum) {
  	   alert("Your guess is higher than the random number: Guess Again!");
  	   $('guessNum').val('');
  	   test = isNaN(guessNum);
  	   isNumber(test);
  	   
  	 }
  	 if(guessNum == randNum) {
  	   alert("Congratulations you win! Your guess is equal to the random number!")
  	 }
  	 guessNum  = parseInt($('#guessNum').val());
     test = isNaN(guessNum);
  	 //console.log("This is randNum" + randNum);
  	 
  	 
    });
});







/* 

Create a high low guessing game:

- a random (integer) number is generated (from 1-100)
- user input allows for guesses
- output of 'too high' or 'too low' accordingly
- when the user gets it right, the game is over and the user wins


*/