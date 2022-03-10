



//let clicks=0;

function FizzBuzzA(value1){
 
    let returnValue=""
         if(value1%5==0&&value1==0){
         
          returnValue+= "FizzBuzz";
         }
         else if(value1%3==0){
           returnValue+="fizz";
           }
         else if(value1%5==0){
          returnValue +="buzz";
          }
         else{
         returnValue+=String(value1);
         }
       
      return returnValue;
   }

   function buzzIt(){
   
    let output="";
    const val1=parseInt(document.getElementById('inp').value);
    console.log("value1:" + val1);
  
    output=FizzBuzzA(val1);
    console.log("output:" + output);
    document.getElementById('inp').value = val1 + 1;
    document.getElementById('num').value = output;
  
  }