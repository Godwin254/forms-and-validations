document.addEventListener('DOMContentLoaded', function(){
	
	//declare button variables
	let storeBtn = document.querySelector('.btn1');
	let retrieveBtn = document.querySelector('.btn2');
	let name1 = document.querySelector(".name1");
	let name2 = document.querySelector(".name2");
	let age = document.querySelector(".age");
	let sex = document.querySelector(".gender");
	let display = document.querySelector(".out");
	let alert = document.querySelector(".alert");
	
	//store value of input when button is clicked
	storeBtn.addEventListener('click', (e) => {
		
		e.preventDefault();
		
		//grab inputs values
		var fname = name1.value;
		var lname = name2.value;
		var pAge = parseInt(age.value);
		var pGender = sex.value;
		let msg = "";
		
		//prevent empty values
		if (fname === "" && fname.length < 3 ){
			msg = "enter first name!!"
			alert.style.display = true;
			alert.innerHtml = msg;
			
		}
		
		var Person = {
							"firstName": fname,
						     "lastName" : lname,
							"age"  : pAge,
				          	"gender": pGender
						}
		//set the object into local storage
		localStorage.setItem("templer", JSON.stringify(Person));
		
		//log into the console
		console.log(Person);
		console.log(localStorage);
	
	});
	
	//------------------------------------------------------------
	
	//retrieve from storage and display
	retrieveBtn.addEventListener('click', () => {
	
		
		//retrieve the values in the storage
		let retrieved = JSON.parse(localStorage.getItem("templer"));
		
		display.innerHTML = "";
		console.log(retrieved)
	});


});