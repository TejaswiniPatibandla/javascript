<html>
<head>
<title> coins</title>
<script>
  function change_coin(x) { 
  while(1){
          if(x >= 25)
          {
              x -= 25;
              console.log("25");
              continue; }
          if(x >= 10){
              x -= 10; 
           console.log("10");
              continue;}
          if(x >= 5){
              x-= 5;
              console.log("5");
              continue; }
          if(x >= 2){
              x-= 2;
               console.log("2");
              continue;
          }
          if(x >= 1){
              x-= 1;
              console.log("1");
              continue;
          }
          else{
              break;
          } 
          }
      }
    change_coin(109);
 </script>
</head>
<body>money conversion to respective numberred coins
</body>
</html>
