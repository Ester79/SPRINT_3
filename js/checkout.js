
// Exercise 6

function validate() {

	var error = 0;
	// Get the input fields
	var fName = document.getElementById("fName");
	var fLastN = document.getElementById("fLastN");
	var fEmail = document.getElementById("fEmail");
	var fPhone = document.getElementById("fPhone");
	var fPassword = document.getElementById("fPassword");
	var fAddress = document.getElementById("fAddress");

	// Get the error elements
	var errorName = document.getElementById("errorName");
	var errorEmail = document.getElementById("errorEmail");
	var errorAddress = document.getElementById("errorAddress");
	var errorLastN = document.getElementById("errorLastN");
	var errorPassword = document.getElementById("errorPassword");
	var errorPhone = document.getElementById("errorPhone");

	
	// Validate fields entered by the user: name, phone, password, and email
	const patternText = new RegExp('^[A-Z]+$', 'i');
	const patternPassword = new RegExp('^[a-zA-Z]{2}[0-9][a-zA-Z]');
	const patternEmail = new RegExp(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/);

	if (fName.value == "" || !patternText.test(fName.value) || fName.value.length < 3) {
		fName.classList.add("errorInput");
		errorName.style.display = "block";
		// error++;
	} else {
		fName.classList.remove("errorInput");
		errorName.style.display = "none";
		noName = false;
	}

	if (fEmail.value == "" || !patternEmail.test(fEmail.value) || fEmail.value.length < 3) {
		fEmail.classList.add('errorInput');
		errorEmail.style.display = "block";
		// error++;
	}else {
		fEmail.classList.remove("errorInput");
		errorEmail.style.display = "none";
	}

	if (fAddress.value == "" || fAddress.value.length < 3) {
		fAddress.classList.add('errorInput');
		errorAddress.style.display = "block";
		// error++;
	}else {
		fAddress.classList.remove("errorInput");
		errorAddress.style.display = "none";
	}

	if (fLastN.value == "" || !patternText.test(fLastN.value) || fLastN.value.length < 3) {
		fLastN.classList.add('errorInput');
		errorLastN.style.display = "block";
	}else {
		fLastN.classList.remove("errorInput");
		errorLastN.style.display = "none";
	}

	if (fPassword.value == "" || !patternPassword.test(fPassword.value) || fPassword.value.length < 4) {
		fPassword.classList.add('errorInput');
		errorPassword.style.display = "block";
	}else {
		fPassword.classList.remove("errorInput");
		errorPassword.style.display = "none";
	}


	if (fPhone.value == "" || fPhone.value.length < 3) {
		fPhone.classList.add('errorInput');
		errorPhone.style.display = "block";
	}else {
		fPhone.classList.remove("errorInput");
		errorPhone.style.display = "none";
	}


	

	// if(error>0){
	// 	alert("Error");
	// }else{
	// 	alert("OK");
	// }

}


