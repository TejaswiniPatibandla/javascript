<html>
<head>
<script>
function long_str(arr) {
  var max = arr[0].length;
var ans = arr[0]; 
for (var i = 1; i < arr.length; i++) 
{ var b = arr[i].length; 
if (b> max)
{ ans = arr[i];
max = b; 
  
} } 
return ans; 
  
} console.log(long_str(["srija", "ramya", "pavani"])); 
console.log(long_str(["cofee", "tea", "milk"]));
// this can be performed  using map,filter function
function long(str) {
  var max = str[0].length;
  str.map(v => max = Math.max(max, v.length));
  result = str.filter(v => v.length == max);
  return result;
}

console.log(long(['bag', 'plank','desk']));
</script>
</head>
<body>
</body>
</html>
