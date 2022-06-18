<html>
<head>
<script>
var myNumberArray=[1,2,3,4,5,6,7,8];
console.log(myNumberArray.filter(function(num){ return (num % 2!=0);}));//returns numbers  not divisible by 2
var myStringArray=["this","is","Array","of","string"];
console.log(myStringArray.filter(function(str){
return str.length>3;
    }));
</script>
</head>
<body>
</body>
</html>
