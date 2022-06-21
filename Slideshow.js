<html>
<head>
<title>SLIDESHOW</title>
<script>
window.onload function() { var image-document.getElementById("aaa");
var Img_array=["c:\te\Tejaswini\wildlife. jpeg","c:\te\Tejaswini\wildlife1.jpeg","image3.jpg" ];
var index=0; 
var interval = 3000;
function slide() {
 Image.src=img_array[index++%img_array.length];
}
setInterval(slide, interval);
}
</script> </head>
<body>
<h1 align="center"> FLOWERS </h1>
<img style = "display: block; 
margin-left: auto;
margin-right: auto;
width: 50%;" id="aaa" src="c:\te\Tejaswini\wildlife.jpeg" width="500" height="500" name="image" />
</body> </html>
