

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