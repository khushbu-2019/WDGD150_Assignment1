
//Concept #1 : When the page is loaded, a "Welcome" messafe alerted to the screen
alert('Welcome to Novak Djokovic Page!');


//Concept #3 : For form, there is a field focus on the text field, it turns into different colour, in this case it lightgrey 
function myFunction(x) {
x.style.background = "lightgrey";
}

//Concept #4 : for slogan, changing the colours of slogan every 3 seconds on the screen from the original to light yellow, pink, sky blue. I searched 
//the w3schools to help me figure out DOMs method for changing the colors on a time interval using the control Standard that leaned in Week 5 of class. 
function changeColor() {
  var x = document.getElementById("slogan");
  if (x.style.color=="lightyellow")
  x.style.color="pink";
  else if (x.style.color=="pink")
  x.style.color="skyblue";
  else if (x.style.color=="skyblue")
  x.style.color="lightyellow";
  else 
  x.style.color="lightyellow";
}