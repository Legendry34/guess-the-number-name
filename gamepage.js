// generation of random value
var y = Math.floor(Math.random() * 10+1);
var x = document.getElementById("g").value;
// count of attempts
// until hit
playername = localStorage.getItem("player_name");
  var guess=1;
  function submit(){
if(x==y)
{
    alert("congratulations!!! "+playername+"you guessed it right in"
    + guess + "GUESS");
    guess= 1;
}
else if(x>y)

{
    guess++;
    alert("oops sorry!! try a smaller number ");

}
else if(x<y)

{
    guess++;
    alert("oops sorry!! try a greater number ");

}
  }
// function for the number sent by the user
function playAgain(){
    y = Math.floor(Math.random()* 10+1);
}