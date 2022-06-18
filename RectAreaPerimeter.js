<html>
<head>
<script>
function Rectangle(height, width) { 
    this.height = height;
    this.width = width;
    this.calcArea = function() 
    { 
        return this.height * this.width;
    }
    this.calcPerimeter=function (){
        return (this.height+this.width)*2;
    }
}

var rex = new Rectangle(10,5);
var area = rex.calcArea();
var perimeter = rex.calcPerimeter();
console.log (area);
console.log (perimeter);
</script>
</head>
<body>
</body>
</html>
