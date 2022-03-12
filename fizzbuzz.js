


 get("http://basic-web.dev.avc.web.usf.edu").then(function(response){
  //Put all code that relies on the data from this request in here.
  
 if(response.status == 200){
    const username= response.data.id; //The username that was requested. In this case it is "myUserName".
    const score= response.data.score; //The user's current score.
  }
  else{
    //User "myUserName" not found.
    //response.data is null
    post("http://basic-web.dev.avc.web.usf.edu", { score: 0 }); //create a new user.
  }
});

function get(url) {
  
  return new Promise((resolve, reject) => {
    const http = new XMLHttpRequest ();
    http.onload = function  (){
      resolve({ status: http.status, data: JSON.parse(http.response) });
    };
    http.open("GET", url);
    http.send();
  });
}

const dataToSend = { score: 5 };

    post("http://basic-web.dev.avc.web.usf.edu", dataToSend).then(function(response){
      switch(response.status){
        case 200:
          //User was updated successfully.
          //response.data will be the same as returned by get(), and should contain the updated data.
          const val1 = response.data.score;
          break;
        case 201:
          //A new user was successfully created. Otherwise same as status 200.
          const value1 = response.data.score;
          break;
        case 400:
          //Bad request. Most likely your data that you sent (in this case dataToSend) was formatted incorrectly, or you supplied a negative score value.
          //response.data will be: { Error: "error message" }
          console.error(response.data);
          break;
        case 500:
          //Something went wrong on the server, such as the database got deleted somehow. This should never happen.
          //response.data will be the same as status 400.
          console.error(response.data);
          break;
      }
      
    });
   
  function post(url, data) {
    console.log("poster");
    data = JSON.stringify(data);
    return new Promise((resolve, reject) => {
      const http = new XMLHttpRequest(data);
      http.onload = function buzzIt(data) {
        resolve({ status: http.status, data: JSON.parse(http.response) });
      };
      http.open("POST", url);
      //Make sure that the server knows we're sending it json data.
      http.setRequestHeader("inp", "fizzbuzz.js");
      http.send(data);

      
    });
  }
  
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
