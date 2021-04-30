var crypt = new JSEncrypt();

function rsa(){
    var userInput = document.getElementById("input-text").value;
    var encryptMethod = document.getElementById("method").value;
    var direction = document.getElementById("direction").value;


    if(userInput === ""){
        userInput = fileText;
    }

    let RSAvalidData = RSAvalidInput(userInput);
    
    if(RSAvalidData){
        if (encryptMethod === "rsa") {
            if(direction === "encryption"){
                document.getElementById("output-text").innerHTML = crypt.encrypt(userInput);
            } else if(direction === "decryption"){
                document.getElementById("output-text").innerHTML = crypt.decrypt(userInput);
            }
        }
    }
}
function RSAvalidInput(RSAinputData){
    let checkValid = true;

    if (RSAinputData == "") {
        checkValid = false;
        alert ("Please enter some data.");
    }

    if (RSAinputData.length > 1000000) {
        checkValid = false;
        alert("Data entered is to large.  Please enter something smaller.");
    }
    return checkValid;
}

var gkeySize = document.getElementById("bit-size").value;

function getKeySize(){
    gkeySize = document.getElementById("bit-size").value;
}

function generateKeys () {
    var sKeySize = gkeySize;
    var keySize = parseInt(sKeySize);
    var crypt = new JSEncrypt({default_key_size: keySize});
    document.getElementById("privkey").innerHTML = crypt.getPrivateKey();
    document.getElementById("pubkey").innerHTML = crypt.getPublicKey();
}
generateKeys();