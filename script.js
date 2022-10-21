function readfile(){
  const xhttp = new XMLHttpRequest();
  xhttp.onload = function(){
    var fileContents = this.responseText;
    alert(fileContents);
    var numbers = fileContents.split("\n");
    alert(numbers);
    alert(numbers[0]);
  }
  xhttp.open("GET","numbers.txt");
  xhttp.send();
  alert("in code");
}