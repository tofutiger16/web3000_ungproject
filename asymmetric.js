

function aes(){
    let methodSelected=document.getElementById('method').value;
let directionSelected= document.getElementById('direction').value;
let modeSelected=document.getElementById('mode').value;
let cipherPaddingSelected= document.getElementById("cipher-padding").value;
let outputBox= document.getElementById("output-text");
    let string = document.getElementById("input-text").value;
    let passphrase = document.getElementById("passphrase").value;

    let output = "";
    let salt ="";
    outputBox.innerHTML = "";

    let mode = determinMode(modeSelected);
    let padding = determinePadding(cipherPaddingSelected);

    if(methodSelected==="aes"){
        if(directionSelected==="encryption"){
            if(modeSelected==="cbc"){
                output = CryptoJS.AES.encrypt(string, passphrase, "{ mode: "+mode+", padding:"+padding+"");
            }
            if(modeSelected=== "cfb"){
                output=CryptoJS.AES.encrypt(string, passphrase, "{ mode: "+mode+", padding:"+padding+"");
            }
            
            if(modeSelected === "ctr"){
                output=CryptoJS.AES.encrypt(string, passphrase, "{ mode: "+mode+", padding:"+padding+"");
            }
            
            if(modeSelected === "ofb"){
                output=CryptoJS.AES.encrypt(string, passphrase, "{ mode: "+mode+", padding:"+padding+"");
            }
            
            if(modeSelected==="ecb"){
                output=CryptoJS.AES.encrypt(string, passphrase, "{ mode: "+mode+", padding:"+padding+"");
            }
            salt = output.salt.toString();
        }
        else{
            if(modeSelected==="cbc"){
                output = CryptoJS.AES.decrypt(string, passphrase, "{ mode: "+mode+", padding:"+padding+"");
            }
            if(modeSelected=== "cfb"){
                output=CryptoJS.AES.decrypt(string, passphrase, "{ mode: "+mode+", padding:"+padding+"");
            }
            
            if(modeSelected === "ctr"){
                output=CryptoJS.AES.decrypt(string, passphrase, "{ mode: "+mode+", padding:"+padding+"");
            }
            
            if(modeSelected === "ofb"){
                output=CryptoJS.AES.decrypt(string, passphrase, "{ mode: "+mode+", padding:"+padding+"");
            }
            
            if(modeSelected==="ecb"){
                output=CryptoJS.AES.decrypt(string, passphrase, "{ mode: "+mode+", padding:"+padding+"");
            }
        }   
        
        if(directionSelected === "encryption"){
            outputBox.innerHTML = output+salt;
        }else{
            outputBox.innerHTML = output.toString(CryptoJS.enc.Utf8)
        }
    }
}

function determinePadding(){

}

function determinMode(string){
    if(string === "cbc"){
        return "CryptoJS.mode.CBC"
    }
    if(string==="cfb"){
        return "CryptoJS.mode.CFB"
    }
    if(string==="ctr"){
        return "CryptoJS.mode.CTR"
    }
    if(string==="ofb"){
        return "CryptoJS.mode.OFB"
    }
    if(string==="ecb"){
        return "CryptoJS.mode.ECB"
    }

}
function cbcencrypt(string){
    if(string === "Pkcs7"){
        return "CryptoJS.pad.Pkcs7"
    }
    if(string === "iso97971"){
        return "CryptoJS.pad.Iso97971"
    }
    if(string === "ansix923"){
        return "CryptoJS.pad.AnsiX923"
    }
    if(string === "iso10126"){
        return "CryptoJS.pad.Iso10126"
    }
    if(string === "zeropadding"){
        return "CryptoJS.pad.ZeroPadding"
    }
    if(string === "nopadding"){
        return "CryptoJS.pad.NoPadding"
    }

}



// //let aes=document.querySelectorAll("option[value=aes]");
// let encrypt = document.getElementById("input-text");
// let passphrase= document.getElementById("passphrase");

// var myString   = "blablabla Card game bla";
// var myPassword = "myPassword";

// // PROCESS
// var encrypted = CryptoJS.AES.encrypt(myString, myPassword);
// var decrypted = CryptoJS.AES.decrypt(encrypted, myPassword);

// document.getElementById("input").innerHTML = "Hello";
// document.getElementById("password").innerHTML = "qwerty";

// function t4(message, password, ) {
//     document.getElementById("key").innerHTML = "";
//     document.getElementById("output-text").innerHTML = "Type:\t\tAES (CBC)";
//     document.getElementById("output-text").innerHTML += "\nMessage:\t" + message;
//     document.getElementById("output-text").innerHTML += "\nPassword:\t" + password;

//     var crypted = CryptoJS.AES.encrypt(message, password, "{ mode: CryptoJS.mode.CBC, padding: CryptoJS.pad.Pkcs7 }");

//     var plain = CryptoJS.AES.decrypt(crypted, password, "{ mode: CryptoJS.mode.CBC, padding: CryptoJS.pad.Pkcs7 }");

//     var saltHex = crypted.salt.toString(); // random salt
//     var ivHex = crypted.iv.toString();
//     var key = crypted.key.toString();

//     document.getElementById("output-text").innerHTML += "\nSalt:\t\t" + saltHex;
//     document.getElementById("output-text").innerHTML += "\nIV:\t\t" + ivHex;
//     document.getElementById("output-text").innerHTML += "\nKey:\t\t" + key;

//     document.getElementById("output-text").innerHTML += "\nEncrypted:\t" + crypted;
//     document.getElementById("output-text").innerHTML += "\nDecrypted:\t" + plain.toString(CryptoJS.enc.Utf8);

// }

// function t4a(message, password) {
//     document.getElementById("key").innerHTML = "";
//     document.getElementById("output-text").innerHTML = "Type:\t\tAES (ECB)";
//     document.getElementById("output-text").innerHTML += "\nMessage:\t" + message;
//     document.getElementById("output-text").innerHTML += "\nPassword:\t" + password;

//     var crypted = CryptoJS.AES.encrypt(message, password, "{ mode: CryptoJS.mode.ECB, padding: CryptoJS.pad.Pkcs7 }");


//     var plain = CryptoJS.AES.decrypt(crypted, password, "{ mode: CryptoJS.mode.ECB, padding: CryptoJS.pad.Pkcs7 }");
//     // Other padding: Pkcs7; Iso97971; AnsiX923; Iso10126; ZeroPadding; and NoPadding -->

//     var saltHex = crypted.salt.toString(); // random salt
//     var ivHex = crypted.iv.toString();
//     var Key = crypted.key.toString();

//     document.getElementById("output-text").innerHTML += "\nSalt:\t\t" + saltHex;
//     document.getElementById("output-text").innerHTML += "\nIV:\t\t" + ivHex;
//     document.getElementById("output-text").innerHTML += "\nKey:\t\t" + Key;

//     document.getElementById("output-text").innerHTML += "\nEncrypted:\t" + crypted;
//     document.getElementById("output-text").innerHTML += "\nDecrypted:\t" + plain.toString(CryptoJS.enc.Utf8);

// }




// function t4b(message, password) {
//     document.getElementById("key").innerHTML = "";
//     document.getElementById("output-text").innerHTML = "Type:\t\tAES (CFB)";
//     document.getElementById("output-text").innerHTML += "\nMessage:\t" + message;
//     document.getElementById("output-text").innerHTML += "\nPassword:\t" + password;

//     var crypted = CryptoJS.AES.encrypt(message, password, "{ mode: CryptoJS.mode.CFB, padding: CryptoJS.pad.AnsiX923 }");

//     var plain = CryptoJS.AES.decrypt(crypted, password, "{ mode: CryptoJS.mode.CFB, padding: CryptoJS.pad.AnsiX923 }");
//     // Other padding: Pkcs7; Iso97971; AnsiX923; Iso10126; ZeroPadding; and NoPadding -->

//     var saltHex = crypted.salt.toString(); // random salt
//     var ivHex = crypted.iv.toString();
//     var Key = crypted.key.toString();

//     document.getElementById("output-text").innerHTML += "\nSalt:\t\t" + saltHex;
//     document.getElementById("output-text").innerHTML += "\nIV:\t\t" + ivHex;
//     document.getElementById("output-text").innerHTML += "\nKey:\t\t" + Key;

//     document.getElementById("output-text").innerHTML += "\nEncrypted:\t" + crypted;
//     document.getElementById("output-text").innerHTML += "\nDecrypted:\t" + plain.toString(CryptoJS.enc.Utf8);

// }




// function t4c(message, password) {
//     document.getElementById("key").innerHTML = "";
//     document.getElementById("output-text").innerHTML = "Type:\t\tAES (CRT)";
//     document.getElementById("output-text").innerHTML += "\nMessage:\t" + message;
//     document.getElementById("output-text").innerHTML += "\nPassword:\t" + password;

//     var crypted = CryptoJS.AES.encrypt(message, password, "{ mode: CryptoJS.mode.CRT, padding: CryptoJS.pad.AnsiX923 }");

//     var plain = CryptoJS.AES.decrypt(crypted, password, "{ mode: CryptoJS.mode.CRT, padding: CryptoJS.pad.AnsiX923 }");
//     // Other padding: Pkcs7; Iso97971; AnsiX923; Iso10126; ZeroPadding; and NoPadding -->
//     var saltHex = crypted.salt.toString(); // random salt
//     var ivHex = crypted.iv.toString();

//     document.getElementById("output-text").innerHTML += "\nSalt:\t\t" + saltHex;
//     document.getElementById("output-text").innerHTML += "\nIV:\t\t" + ivHex;

//     document.getElementById("output-text").innerHTML += "\nEncrypted:\t" + crypted;
//     document.getElementById("output-text").innerHTML += "\nDecrypted:\t" + plain.toString(CryptoJS.enc.Utf8);

// }


// function t4d(message, password) {
//     document.getElementById("key").innerHTML = "";
//     document.getElementById("output-text").innerHTML = "Type:\t\tAES (OFB)";
//     document.getElementById("output-text").innerHTML += "\nMessage:\t" + message;
//     document.getElementById("output-text").innerHTML += "\nPassword:\t" + password;

//     var crypted = CryptoJS.AES.encrypt(message, password, "{ mode: CryptoJS.mode.OFB, padding: CryptoJS.pad.AnsiX923 }");

//     var plain = CryptoJS.AES.decrypt(crypted, password, "{ mode: CryptoJS.mode.OFB, padding: CryptoJS.pad.AnsiX923 }");
//     // Other padding: Pkcs7; Iso97971; AnsiX923; Iso10126; ZeroPadding; and NoPadding -->

//     var saltHex = crypted.salt.toString(); // random salt
//     var ivHex = crypted.iv.toString();

//     document.getElementById("output-text").innerHTML += "\nSalt:\t\t" + saltHex;
//     document.getElementById("output-text").innerHTML += "\nIV:\t\t" + ivHex;
//     document.getElementById("output-text").innerHTML += "\nEncrypted:\t" + crypted;
//     document.getElementById("output-text").innerHTML += "\nDecrypted:\t" + plain.toString(CryptoJS.enc.Utf8);

// }