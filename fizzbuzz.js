




function FizzBuzzA(value1){
  console.log("IS this working?");
    let returnValue="";
    for(let i=1;i<=value1;i++){
         if(i%value1==0){
           returnValue +='FizzBuzz';
         }
         else if(i%value1==1){
           returnValue +='Fizz';
           }
         else if(i%value1==0||i%value1==1){
          returnValue+='Buzz';
          }
          else{
          returnValue +=i+' ';
          }
         }
      return returnValue;
   }

   function buzzIt(){
    let output="";
    const val1=document.getElementById("num");
    val1.className="standard-button";
    val1.style.background="blue";
    val1.tagName
    "BUTTON"
    output=FizzBuzzA(val1);
    
    document.getElementById("num").innerHTML =output;
  
  }