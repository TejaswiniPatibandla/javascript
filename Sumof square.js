<html>
<head>sum of squares of array elements 
<script>
function ar(arr){
var sum=0;
for(var i=0;i<arr.length; i++){
var k =arr[i]*arr[i];
sum+=k
}
return sum;
}console.log(ar([3,5,2,1]));
</script>
</head>
<body>
</body>
</html>
