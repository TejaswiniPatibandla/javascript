<html>
<head>
<script>
    var ab=function will(a,b){
        return a*b*2;
    }
    var n=ab(3,3);
    console.log(n);
  //by using arrow operator
  var ab=(a,b)=>{
        return a*b*2;
    }
    var n=ab(2,3);
    console.log(n);
    //simplified form
var ab=(a,b) => {
      console.log(a);
     return a*b*2;
}
    var n=ab(3,3);
    console.log(n);
    </script>
    </head>
<body>
Arrow operator example
</body>
</html>
