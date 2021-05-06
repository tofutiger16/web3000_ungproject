function aes(){
let methodSelected=document.getElementById('method').value;
let directionSelected= document.getElementById('direction').value;
let modeSelected=document.getElementById('mode').value;
let cipherPaddingSelected= document.getElementById("cipher-padding").value;
let outputBox= document.getElementById("output-text");
    let string = document.getElementById("input-text").value;
    let passphrase = document.getElementById("passphrase").value;

    //will look for file text if the input stting box is empty
    if(string===""){
        string=fileText;
    }
    //will reset output, salt, and outputBox variables for next encryption/decryption
    let output = "";
    let salt ="";
    outputBox.innerHTML = "";

    //mode/padding will be passed into determineMode/determinePadding based on the dropdown HTML element value
    let mode = determineMode(modeSelected);
    let padding = determinePadding(cipherPaddingSelected);

    if(methodSelected==="aes"){
        if(directionSelected==="encryption"){
            //will encrypt string with passphrase/mode/padding and will be assigned to output variable
            output = CryptoJS.AES.encrypt(string, passphrase, {mode, padding});
       
            //will create salt for encrypted string
            salt = output.salt.toString();
        }
        else{
            //will dencrypt string with passphrase/mode/padding and will be assigned to output variable
            output = CryptoJS.AES.decrypt(string, passphrase, {mode, padding});
           
        }   
        
        if(directionSelected === "encryption"){
            //will append salt to encrypted string
            outputBox.innerHTML = output+salt;
        }
        else{
            outputBox.innerHTML = output.toString(CryptoJS.enc.Utf8);
        }
    }
}

//determineMode function will set encryption mode based on dropdown
function determineMode(string){
    if(string === "cbc"){
        return CryptoJS.mode.CBC;
    }
    if(string==="cfb"){
        return CryptoJS.mode.CFB;
    }
    if(string==="ctr"){
        return CryptoJS.mode.CTR;
    }
    if(string==="ofb"){
        return CryptoJS.mode.OFB;
    }
    if(string==="ecb"){
        return CryptoJS.mode.ECB;
    }

}
//determinPadding function will set encryption Padding based on dropdown
function determinePadding(string){
    if(string === "pkcs7"){
        return CryptoJS.pad.Pkcs7;
    }
    if(string === "iso97971"){
        return CryptoJS.pad.Iso97971;
    }
    if(string === "ansix923"){
        return CryptoJS.pad.AnsiX923;
    }
    if(string === "iso10126"){
        return CryptoJS.pad.Iso10126;
    }
    if(string === "zeropadding"){
        return CryptoJS.pad.ZeroPadding;
    }
    if(string === "nopadding"){
        return CryptoJS.pad.NoPadding;
    }

}