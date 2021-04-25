var crypt = new JSEncrypt();


let rsafR= new FileReader();
let rsafileText="";
let rsainput=document.getElementById("file-select");
rsainput.onchange=function(event){
    rsafR.readAsText(event.target.files[0])
}
rsafR.onload=function(){
    console.log(rsafR.result);
    rsafileText = rsafR.result;
}
console.log("rsafileText: " + rsafileText);


function rsa(){
    var userInput = document.getElementById("input-text").value;
    var encryptMethod = document.getElementById("method").value;
    var direction = document.getElementById("direction").value;


    if(userInput === ""){
        document.getElementById("input-text").innerHTML = rsafileText;
    }
    userInput = document.getElementById("input-text").value;
    
    if (encryptMethod === "rsa") {
        if(direction === "encryption"){
            document.getElementById("output-text").innerHTML = crypt.encrypt(userInput);
            //document.getElementById("input-text").innerHTML = '';
        } else if(direction === "decryption"){
            document.getElementById("output-text").innerHTML = crypt.decrypt(userInput);
            //document.getElementById("input-text").innerHTML = '';
        }
    }
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