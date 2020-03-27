//variable declaration
let form = document.querySelector(".form");
var title = document.querySelector(".title");
var alert1 = document.getElementById("alerto");
var uname = document.querySelector(".fname");
var email = document.querySelector(".email");
var fcode = document.querySelector(".code1");
var lcode = document.querySelector(".code2");
var btn1 = document.getElementById("btn1");
var btn2 = document.getElementById("btn2");
var error1 = document.getElementById("error1");
var error2 = document.getElementById("error2");
var error3 = document.getElementById("error3");
var error4 = document.getElementById("error4");
var link = document.querySelector(".link");
var social = document.querySelector(".social");

//add event listener to prevent default
form.addEventListener('submit', (e)=>{
     e.preventDefault();
})

//add and eventListener to the submit button 
form.addEventListener('click', verify);

//define the function for verification
function verify(){

      //get the value on inputs
     const unameVal = uname.value;
     const emailVal = email.value;
     const fcodeVal = fcode.value;
     const lcodeVal = lcode.value;


     //check 

 
       //check for correct input for username
     if(unameVal === "" || unameVal===null){
            //code to executed
          uname.style.border = "1px solid red" 
          uname.style.borderRadius = "4px"
          error1.innerHTML = "enter your username!"
          return false;
     }else{
            //checking length of username
            if(unameVal.length <= 3 ){
               
               uname.style.border = "1px solid red"
               uname.style.borderRadius = "4px"
               error1.innerHTML = "enter username correctly!"
               return false;
          }else{
               uname.style.border = "none"
               error1.remove();
          }
         
     }

     //validation check for email
     if(emailVal.indexOf("@")== -1 || emailVal.length < 6){
          error2.innerHTML = "Enter Valid Email"
          email.style.border = "1px solid red" 
          email.style.borderRadius = "4px"
          return false;
     }else{
          error2.remove();
          email.style.border = "none" 

     }
     //validation check for passcode
     if(fcodeVal === "" || fcodeVal === null){
          error3.innerHTML = "enter password"
          fcode.style.border = "1px solid red"
          fcode.style.borderRadius = "4px"
          return false;
     }else{
          if(fcodeVal.length < 6 ){
               error3.innerHTML = "Password must be more than 6 characters"
               fcode.style.border = "1px solid red"
               fcode.style.borderRadius = "4px"
               return false;
          }else{
               error3.remove();
               fcode.style.border = "none"
 
          }
     }

     //validate if passwords are the same
     if(lcodeVal === "" || lcodeVal === null){
          error4.innerHTML = "Please Confrim Password! "
          return false;
     }else{
          if(lcodeVal != fcodeVal){
               error4.innerHTML = "Password do not match! "
               return false;
          }else{
               error4.remove();
          }
     }
   
     
     //alert for submition
     alert1.innerHTML = `Welcome  ${unameVal}`
     alert1.style.color = "blue"
       //alert("Sign in Successful")

     return true;
     //end
}

//optional sign in
link.addEventListener("click", (e) => {

     social.style.visibility = "visible"
     e.preventDefault();
});