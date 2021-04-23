"use-strict";

  function clearOutput () {
    
      document.getElementById("output-text").innerHTML = "";
    
  }

  //After RSA selection this function will clear out the passphrase value.
  function disableOptions () {
    let inputMethod = document.getElementById('method').value;

    if (inputMethod === "rabbit") {
      document.getElementById("passphrase").disabled = false;
      document.getElementById("passphrase").placeholder = "Secret password";
      document.getElementById('mode').value = "";
      document.getElementById('mode').disabled = true;
      document.getElementById('cipher-padding').value = "";
      document.getElementById('cipher-padding').disabled = true;
	  document.getElementById('rsa-key-row').style.display = "none";
	  $("select option[value='pkcs1']").prop('disabled', true);
    }
    else if (inputMethod === "rsa") {
      document.getElementById("passphrase").placeholder="";
      document.getElementById("passphrase").value=""
      document.getElementById("passphrase").disabled = true;
      document.getElementById('mode').value = "";
      document.getElementById('mode').disabled = true;
      document.getElementById('cipher-padding').value = "pkcs1";
      document.getElementById('cipher-padding').disabled = true;
	  document.getElementById('rsa-key-row').style.display = "flex";
    }
	else if (inputMethod === "des") {
	  $("select option[value='iso7816']").prop('disabled', false);
	  $("select option[value='iso97971']").prop('disabled', true);
	  document.getElementById('rsa-key-row').style.display = "none";
	  $("select option[value='pkcs1']").prop('disabled', true);
	}
    else {
      document.getElementById("passphrase").placeholder = "Secret password";
      document.getElementById("passphrase").disabled = false;
      document.getElementById('mode').disabled = false;
      document.getElementById('cipher-padding').disabled = false;
	  $("select option[value='iso7816']").prop('disabled', true);
	  $("select option[value='iso97971']").prop('disabled', false);
	  document.getElementById('rsa-key-row').style.display = "none";
	  $("select option[value='pkcs1']").prop('disabled', true);
    }
  }

function encrypt(){
	let type = document.getElementById("method").value;

	switch(type){
		case "aes":
			aes();
	    case "des":
			des();
	    case "rsa":
		    	rsa();
	    case "rabbit":
		    //rabbit();
	}
}
