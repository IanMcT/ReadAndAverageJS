var total = 0; 
var counter = 0;
function readfile(){
  const xhttp = new XMLHttpRequest();
  xhttp.onload = function(){
    var fileContents = this.responseText;
    alert(fileContents);
    var numbers = fileContents.split("\n");
    for(var i = 0;i < numbers.length; i++){
      total += parseInt(numbers[i]);
      counter++;
    }
    alert(numbers);
    var average = total/counter;
    alert(average + " average");
  }
  xhttp.open("GET","numbers.txt");
  xhttp.send();
  alert("in code");
}