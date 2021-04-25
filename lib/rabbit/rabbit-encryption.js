"use-strict";

let frRabbit= new FileReader();
let fileText="";
let input=document.getElementById("file-select");

input.onchange= function(event){
  frRabbit.readAsText(event.target.files[0])
}
frRabbit.onload=function(){
  fileText=frRabbit.result;
}

function rabbit () {

  let process = document.getElementById("process-button");
  let outputText = document.getElementById("output-text");
  let methodSelected = document.getElementById('method').value;
  let cryptoDirection = document.getElementById('direction').value;
  let data = document.getElementById("input-text").value;
  let key = document.getElementById("passphrase").value;

  if(data===""){
    data=fileText;
  }

  let goodDataBoolean = checkInput(data, key);

  if (goodDataBoolean) {

    if (cryptoDirection === "encryption") {
      let cypherText = CryptoJS.Rabbit.encrypt(data, key);
      outputText.innerHTML = cypherText;
    }
    else {
      let plainText = CryptoJS.Rabbit.decrypt(data, key);
      outputText.innerHTML = plainText.toString( CryptoJS.enc.Utf8 );
    }
  }
}

//checks for valid input into decryption. if returns false, encryption will not run
function checkInput (inputData, inputKey) {
  let outputBoolean = true;

  if (inputData == "") {
    outputBoolean = false;
    alert("Enter data to be encrypted.");
  }

  if (inputKey == "") {
    outputBoolean = false;
    alert("Enter passphrase.");
  }

  if (inputKey.length > 128) {
    outputBoolean = false;
    alert("Passphrase is too long.  Max length is 128 bits");
  }

  if (inputData.length > 1000000) {
    outputBoolean = false;
    alert("Input data is too large.  Max size is 1 Mb");
  }

  return outputBoolean;
}
