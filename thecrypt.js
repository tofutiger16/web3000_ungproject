"use-strict";

let FR= new FileReader();
let fileText="";
let input=document.getElementById("file-select");
input.onchange= function(event){
FR.readAsText(event.target.files[0])
}
FR.onload=function(){
    console.log(FR.result);
    fileText=FR.result;
}
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
	  document.getElementById("rsa-bit-row").style.display = "none";
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
	  document.getElementById("rsa-bit-row").style.display = "block";
    }
	else if (inputMethod === "des") {
	  document.getElementById("cipher-padding").disabled = false;
	  document.getElementById("mode").disabled = false;
	  document.getElementById("passphrase").placeholder = "Secret password";
	  document.getElementById("passphrase").disabled = false;
	  $("select option[value='iso7816']").prop('disabled', false);
	  $("select option[value='iso97971']").prop('disabled', true);
	  document.getElementById('rsa-key-row').style.display = "none";
	  $("select option[value='pkcs1']").prop('disabled', true);
	  document.getElementById("rsa-bit-row").style.display = "none";
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
	  document.getElementById("rsa-bit-row").style.display = "none";
    }
  }

function encrypt(){
	let type = document.getElementById("method").value;

	document.getElementById("progress-loader").style.visibility = "visible";

	if (type === "aes") {
		aes();
	}
	else if (type === "des") {
		des();
	}
	else if (type === "rsa") {
		rsa();
	}
	else {
		rabbit ();
	}

  setTimeout(function() {
	document.getElementById("progress-loader").style.visibility = "hidden";
  }, 1000);
}

function makeTextFile(text) {
  let textFile = null;
  let data = new Blob([text], {type: "text/plain"});
  if (textFile !== null) {
	window.URL.revokeObjectURL(textFile);
  }
  textFile = window.URL.createObjectURL(data);
  return textFile;
}

function createFile() {
  let textbox = document.getElementById("output-text");
  let link = document.getElementById("download-file");
  link.href = makeTextFile(textbox.innerHTML);
  link.style.display = "block";
}
