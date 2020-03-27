//variable declaration
let form = document.getElementById("form1");
let congrats_msg = document.querySelector(".congrats");
let  name1 = document.getElementById("user-name");
let  email = document.getElementById("email1");
let pswd1 = document.getElementById("psw1");
let pswd2 = document.getElementById("psw2");
let success = document.querySelector(".fa-check-circle");
let error_alert = document.querySelector(".alert-msg");
let title = document.querySelector(".congrats");
let btn = document.getElementById('btn1');


//prevent the form from submiting when empty
     //form.addEventListener('submit', (e) => {
         // e.preventDefault();

        //  verify();
     //});

//add eventListner to perform a function on the form
     //form.addEventListener('submit',  verify);

     // define the function verify the form
    function  verify(){

          const nameValue = name1.value.trim();
          const emailValue = email.value.trim();
          const pas1Value = pswd1.value.trim();
          const pas2Value = pswd2.value.trim();

          //validate username input
          if (nameValue === ' ' ){
              //show error msg
               alert("input name")
          }else{
               //show success class
          }

         
         
         //END 
     }
     verify();



