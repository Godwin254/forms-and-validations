//Validating our form---

function validate(){
     var x = document.form["myform"][fname].value;
     if(x == ""){
          alert("fill in first name")
          return false
     }
}
const fnameValue = fname.value.trim();
const lnameValue = lname.value.trim();
const dateValue = date.value.trim();
const errorValue = email.value.trim();
const countryValue = country.value.trim();
const lineCheck = mobile.value.trim();
const passwordValue = password.value.trim();
const password2Value = password2.value.trim();


if (usernameValue === '' ){
     //show error
     //add error class
     setErrorFor(username, "username can not be blank")
}else{
     //add success class
     setSuccessFor(username);
}

function setErrorFor(input, message){
     const formControl = input.parentELement;
     const small = formControl.querySelector(small);

     //add error message inside
     small.innertext = message;

     //add error class
     formControl.className = 'input-control error'
}

function setErrorFor(input){
     const formControl = input.parentELement;
     formControl.className = 'input-control error sucess';
}    