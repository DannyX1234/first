document.getElementById("bangtansonyeondan").addEventListener('click', calculator);
function calculator()
{
  var d = document.getElementById("dobby").value;
  document.getElementById("result").innerHTML="You are "+(2022-d)+" years old";
}