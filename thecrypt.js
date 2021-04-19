"use-strict";

  function clearOutput () {
    if (!firstInput) {
      document.getElementById("output-text").innerHTML = "";
    }
  }

  //Between selections this function will clear out the passphrase value.
  function disableOptions () {
    let inputMethod = document.getElementById('method').value;

    if (inputMethod === "rabbit") {
      document.getElementById("passphrase").disabled = false;
      document.getElementById("passphrase").placeholder = "Secret password";
      document.getElementById('mode').value = "";
      document.getElementById('mode').disabled = true;
      document.getElementById('cipher-padding').value = "";
      document.getElementById('cipher-padding').disabled = true;
    }
    else if (inputMethod === "rsa") {
      document.getElementById("passphrase").placeholder="";
      document.getElementById("passphrase").value=""
      document.getElementById("passphrase").disabled = true;
      document.getElementById('mode').value = "";
      document.getElementById('mode').disabled = true;
      document.getElementById('cipher-padding').value = "pkcs7";
      document.getElementById('cipher-padding').disabled = true;
    }
    else {
      document.getElementById("passphrase").placeholder = "Secret password";
      document.getElementById('mode').disabled = false;
      document.getElementById('cipher-padding').disabled = false;
    }
  }
