<html>
<head>
<script>
// using filter function
   function is_even(t)
   {
        console.log(t%2==0);
    }
    [4,5,3,62,34,21].filter(is_even);
    //checking for odd
    function is_odd(t)
    {
    
        console.log(t%2!=0);
    }
  [4,5,3,62,34,21].filter(is_odd);
// step iterator function
   function f(start,step)
   {
      return function()
      {
          var x=start;
          start=start+step;
          return x;
      }
   }
   var call=f(3,2);
   var i=1;
   while(i<5)
   {
  console.log (call());
   i++;
   }
   var s=f(10,5);
   console.log (s());
   //returns function
   console.log (call)
</script>
</head>
<body>
</body>
</html>
