<html>
    <head>
    <script>
var k = new Array();
k[0]=3;
k[1]=6;
k[2]=5;
k[3]="undefined";
k[9]=44;
delete k[0];// actual length is 10
console.log(k.length);
k.shift();
console.log(k.length);// length is 9
for( var I in k){ // represents only elements defined
    if(k.hasOwnProperty(I)){
        console.log(I);
    }
}
</script>
</head>
<body>array length example
</body>
</html>
