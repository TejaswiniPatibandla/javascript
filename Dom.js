<html>
<body>

<p> This shows the tag name</p>
<p id="demo">welcome</p>< br>
<p class=" good">
</p>
<form>
< input type= "text"  value= " textfield">
</form>
<ul id="myList">
  <li>books</li>
  <li>pdf</li>
</ul>
<button onclick="myFunction()">Append</button>
<script>
document.getElementById("demo").innerHtml = "Hello World!";
document.getElementsByTagName("p");
const x = document.getElementsByClassName("good");
document.getElementById("demo").innerHTML = 
' class="intro"  ' + x[0].innerHTML;
document.write("this is javascript Doc obj model");

function myFunction() {

const node = document.createElement("li");

const textnode = document.createTextNode("e- books");

node.appendChild(textnode);

document.getElementById("myList").appendChild(node);
}
</script>

</body>
</html>
