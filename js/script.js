function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

function myAboutClick(){
	window.location.href="about.html";
}
function myContactClick(){
	window.location.href="contact.html";
}	
function myLogoClick(){
	window.location.href="index.html";
}


function checkFields(){
	var fullName = document.getElementById("full_name").value;
	var email = document.getElementById("email").value;
	var phoneNumber = document.getElementById("phone").value;
	var message = document.getElementById("message").value;

	if(fullName == "" || email == ""|| phoneNumber == "" || message == ""){
		alert("All fields should be filled in! Please check and fill in the missing fields.");
		return false;
	}else if(!document.getElementById("text_contact").checked && !document.getElementById("email_contact").checked ){
		alert("Choose at least one way of contact!");
		return false;
	}
	else{
		alert("Your message:\n " + "'" + message +"'" + " \nAnd your contact information was sent to us!");
		
		if(document.getElementById("text_contact").checked){
			alert("We will contact you via text message to your phone: " + phoneNumber);
		}
		else if(document.getElementById("email_contact").checked){
			alert("We will contact you via your email: " + email);
		}
		return true;
	}
}

window.addEventListener('load', function(){
    document.getElementById('submit').addEventListener("click", function(){
        checkFields();
    })
});


