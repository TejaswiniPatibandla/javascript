<html>
<head>
<title> check for integer</title>
<script>
function is_integer(x) {
    if(typeof x == 'number'){
        if (Number.isInteger(x)) {
            console.log(`${x} is integer.`);
        }
        else {
            console.log(`${x} is a float value.`);
        }
    
    } else {
        console.log(`${x} is not a number`);
    }
}
is_integer(4.2+1.8);
is_integer(44);
is_integer(3.0);
is_integer(4/2);
 </script>
</head>
<body>checking for integer
</body>
</html>
