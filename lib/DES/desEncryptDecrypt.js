
function des() {
    let methodSelected = document.getElementById("method").value;
    let directionSelected = document.getElementById("direction").value;
    let modeSelected = document.getElementById("mode").value;
    let paddingSelected = document.getElementById("cipher-padding").value;
    let passphrase = document.getElementById("passphrase").value;
    let outputText = document.getElementById("output-text");
    let inputText = document.getElementById("input-text").value;


    let output = "";

    console.log("true");

    if (inputText ==="") {
        inputText = fileText;
    }

    if (methodSelected ==="des") {
        if (directionSelected === "encryption") {
            //encrypt
            
            if (modeSelected === "cbc" && paddingSelected === "nopadding") {
                output = Crypto.DES.encrypt(inputText, passphrase, {mode: new Crypto.mode.CBC(Crypto.pad.NoPadding)});
            }
            else if (modeSelected === "cbc" && paddingSelected === "zeropadding") {
                output = Crypto.DES.encrypt(inputText, passphrase, {mode: new Crypto.mode.CBC(Crypto.pad.ZeroPadding)});
            }
            else if (modeSelected === "cbc" && paddingSelected === "iso7816") {
                output = Crypto.DES.encrypt(inputText, passphrase, {mode: new Crypto.mode.CBC});
            }
            else if (modeSelected === "cbc" && paddingSelected === "ansix923") {
                output = Crypto.DES.encrypt(inputText, passphrase, {mode: new Crypto.mode.CBC(Crypto.pad.ansix923)});
            }
            else if (modeSelected === "cbc" && paddingSelected === "iso10126") {
                output = Crypto.DES.encrypt(inputText, passphrase, {mode: new Crypto.mode.CBC(Crypto.pad.iso10126)});
            }
            else if (modeSelected === "cbc" && paddingSelected === "pkcs7") {
                output = Crypto.DES.encrypt(inputText, passphrase, {mode: new Crypto.mode.CBC(Crypto.pad.pkcs7)});
            }

            if (modeSelected === "ecb" && paddingSelected === "nopadding") {
                output = Crypto.DES.encrypt(inputText, passphrase, {mode: new Crypto.mode.ECB(Crypto.pad.NoPadding)});
            }
            else if (modeSelected === "ecb" && paddingSelected === "zeropadding") {
                output = Crypto.DES.encrypt(inputText, passphrase, {mode: new Crypto.mode.ECB(Crypto.pad.ZeroPadding)});
            }
            else if (modeSelected === "ecb" && paddingSelected === "iso7816") {
                output = Crypto.DES.encrypt(inputText, passphrase, {mode: new Crypto.mode.ECB});
            }
            else if (modeSelected === "ecb" && paddingSelected === "ansix923") {
                output = Crypto.DES.encrypt(inputText, passphrase, {mode: new Crypto.mode.ECB(Crypto.pad.ansix923)});
            }
            else if (modeSelected === "ecb" && paddingSelected === "iso10126") {
                output = Crypto.DES.encrypt(inputText, passphrase, {mode: new Crypto.mode.ECB(Crypto.pad.iso10126)});
            }
            else if (modeSelected === "ecb" && paddingSelected === "pkcs7") {
                output = Crypto.DES.encrypt(inputText, passphrase, {mode: new Crypto.mode.ECB(Crypto.pad.pkcs7)});
            }

            if (modeSelected === "cfb" && paddingSelected === "nopadding") {
                output = Crypto.DES.encrypt(inputText, passphrase, {mode: new Crypto.mode.CFB(Crypto.pad.NoPadding)});
            }
            else if (modeSelected === "cfb" && paddingSelected === "zeropadding") {
                output = Crypto.DES.encrypt(inputText, passphrase, {mode: new Crypto.mode.CFB(Crypto.pad.ZeroPadding)});
            }
            else if (modeSelected === "cfb" && paddingSelected === "iso7816") {
                output = Crypto.DES.encrypt(inputText, passphrase, {mode: new Crypto.mode.CFB});
            }
            else if (modeSelected === "cfb" && paddingSelected === "ansix923") {
                output = Crypto.DES.encrypt(inputText, passphrase, {mode: new Crypto.mode.CFB(Crypto.pad.ansix923)});
            }
            else if (modeSelected === "cfb" && paddingSelected === "iso10126") {
                output = Crypto.DES.encrypt(inputText, passphrase, {mode: new Crypto.mode.CFB(Crypto.pad.iso10126)});
            }
            else if (modeSelected === "cfb" && paddingSelected === "pkcs7") {
                output = Crypto.DES.encrypt(inputText, passphrase, {mode: new Crypto.mode.CFB(Crypto.pad.pkcs7)});
            }

            if (modeSelected === "ofb" && paddingSelected === "nopadding") {
                output = Crypto.DES.encrypt(inputText, passphrase, {mode: new Crypto.mode.OFB(Crypto.pad.NoPadding)});
            }
            else if (modeSelected === "ofb" && paddingSelected === "zeropadding") {
                output = Crypto.DES.encrypt(inputText, passphrase, {mode: new Crypto.mode.OFB(Crypto.pad.ZeroPadding)});
            }
            else if (modeSelected === "ofb" && paddingSelected === "iso7816") {
                output = Crypto.DES.encrypt(inputText, passphrase, {mode: new Crypto.mode.OFB});
            }
            else if (modeSelected === "ofb" && paddingSelected === "ansix923") {
                output = Crypto.DES.encrypt(inputText, passphrase, {mode: new Crypto.mode.OFB(Crypto.pad.ansix923)});
            }
            else if (modeSelected === "ofb" && paddingSelected === "iso10126") {
                output = Crypto.DES.encrypt(inputText, passphrase, {mode: new Crypto.mode.OFB(Crypto.pad.iso10126)});
            }
            else if (modeSelected === "ofb" && paddingSelected === "pkcs7") {
                output = Crypto.DES.encrypt(inputText, passphrase, {mode: new Crypto.mode.OFB(Crypto.pad.pkcs7)});
            }

            if (modeSelected === "ctr" && paddingSelected === "nopadding") {
                output = Crypto.DES.encrypt(inputText, passphrase, {mode: new Crypto.mode.CTR(Crypto.pad.NoPadding)});
            }
            else if (modeSelected === "ctr" && paddingSelected === "zeropadding") {
                output = Crypto.DES.encrypt(inputText, passphrase, {mode: new Crypto.mode.CTR(Crypto.pad.ZeroPadding)});
            }
            else if (modeSelected === "ctr" && paddingSelected === "iso7816") {
                output = Crypto.DES.encrypt(inputText, passphrase, {mode: new Crypto.mode.CTR});
            }
            else if (modeSelected === "ctr" && paddingSelected === "ansix923") {
                output = Crypto.DES.encrypt(inputText, passphrase, {mode: new Crypto.mode.CTR(Crypto.pad.ansix923)});
            }
            else if (modeSelected === "ctr" && paddingSelected === "iso10126") {
                output = Crypto.DES.encrypt(inputText, passphrase, {mode: new Crypto.mode.CTR(Crypto.pad.iso10126)});
            }
            else if (modeSelected === "ctr" && paddingSelected === "pkcs7") {
                output = Crypto.DES.encrypt(inputText, passphrase, {mode: new Crypto.mode.CTR(Crypto.pad.pkcs7)});
            }

            console.log(output);
            outputText.innerHTML = output;

        }

        else {
            //decrypt

            if (modeSelected === "cbc" && paddingSelected === "nopadding") {
                output = Crypto.DES.decrypt(inputText, passphrase, {mode: new Crypto.mode.CBC(Crypto.pad.NoPadding)});
            }
            else if (modeSelected === "cbc" && paddingSelected === "zeropadding") {
                output = Crypto.DES.decrypt(inputText, passphrase, {mode: new Crypto.mode.CBC(Crypto.pad.ZeroPadding)});
            }
            else if (modeSelected === "cbc" && paddingSelected === "iso7816") {
                output = Crypto.DES.decrypt(inputText, passphrase, {mode: new Crypto.mode.CBC});
            }
            else if (modeSelected === "cbc" && paddingSelected === "ansix923") {
                output = Crypto.DES.decrypt(inputText, passphrase, {mode: new Crypto.mode.CBC(Crypto.pad.ansix923)});
            }
            else if (modeSelected === "cbc" && paddingSelected === "iso10126") {
                output = Crypto.DES.decrypt(inputText, passphrase, {mode: new Crypto.mode.CBC(Crypto.pad.iso10126)});
            }
            else if (modeSelected === "cbc" && paddingSelected === "pkcs7") {
                output = Crypto.DES.decrypt(inputText, passphrase, {mode: new Crypto.mode.CBC(Crypto.pad.pkcs7)});
            }

            if (modeSelected === "ecb" && paddingSelected === "nopadding") {
                output = Crypto.DES.decrypt(inputText, passphrase, {mode: new Crypto.mode.ECB(Crypto.pad.NoPadding)});
            }
            else if (modeSelected === "ecb" && paddingSelected === "zeropadding") {
                output = Crypto.DES.decrypt(inputText, passphrase, {mode: new Crypto.mode.ECB(Crypto.pad.ZeroPadding)});
            }
            else if (modeSelected === "ecb" && paddingSelected === "iso7816") {
                output = Crypto.DES.decrypt(inputText, passphrase, {mode: new Crypto.mode.ECB});
            }
            else if (modeSelected === "ecb" && paddingSelected === "ansix923") {
                output = Crypto.DES.decrypt(inputText, passphrase, {mode: new Crypto.mode.ECB(Crypto.pad.ansix923)});
            }
            else if (modeSelected === "ecb" && paddingSelected === "iso10126") {
                output = Crypto.DES.decrypt(inputText, passphrase, {mode: new Crypto.mode.ECB(Crypto.pad.iso10126)});
            }
            else if (modeSelected === "ecb" && paddingSelected === "pkcs7") {
                output = Crypto.DES.decrypt(inputText, passphrase, {mode: new Crypto.mode.ECB(Crypto.pad.pkcs7)});
            }

            if (modeSelected === "cfb" && paddingSelected === "nopadding") {
                output = Crypto.DES.decrypt(inputText, passphrase, {mode: new Crypto.mode.CFB(Crypto.pad.NoPadding)});
            }
            else if (modeSelected === "cfb" && paddingSelected === "zeropadding") {
                output = Crypto.DES.decrypt(inputText, passphrase, {mode: new Crypto.mode.CFB(Crypto.pad.ZeroPadding)});
            }
            else if (modeSelected === "cfb" && paddingSelected === "iso7816") {
                output = Crypto.DES.decrypt(inputText, passphrase, {mode: new Crypto.mode.CFB});
            }
            else if (modeSelected === "cfb" && paddingSelected === "ansix923") {
                output = Crypto.DES.decrypt(inputText, passphrase, {mode: new Crypto.mode.CFB(Crypto.pad.ansix923)});
            }
            else if (modeSelected === "cfb" && paddingSelected === "iso10126") {
                output = Crypto.DES.decrypt(inputText, passphrase, {mode: new Crypto.mode.CFB(Crypto.pad.iso10126)});
            }
            else if (modeSelected === "cfb" && paddingSelected === "pkcs7") {
                output = Crypto.DES.decrypt(inputText, passphrase, {mode: new Crypto.mode.CFB(Crypto.pad.pkcs7)});
            }

            if (modeSelected === "ofb" && paddingSelected === "nopadding") {
                output = Crypto.DES.decrypt(inputText, passphrase, {mode: new Crypto.mode.OFB(Crypto.pad.NoPadding)});
            }
            else if (modeSelected === "ofb" && paddingSelected === "zeropadding") {
                output = Crypto.DES.decrypt(inputText, passphrase, {mode: new Crypto.mode.OFB(Crypto.pad.ZeroPadding)});
            }
            else if (modeSelected === "ofb" && paddingSelected === "iso7816") {
                output = Crypto.DES.decrypt(inputText, passphrase, {mode: new Crypto.mode.OFB});
            }
            else if (modeSelected === "ofb" && paddingSelected === "ansix923") {
                output = Crypto.DES.decrypt(inputText, passphrase, {mode: new Crypto.mode.OFB(Crypto.pad.ansix923)});
            }
            else if (modeSelected === "ofb" && paddingSelected === "iso10126") {
                output = Crypto.DES.decrypt(inputText, passphrase, {mode: new Crypto.mode.OFB(Crypto.pad.iso10126)});
            }
            else if (modeSelected === "ofb" && paddingSelected === "pkcs7") {
                output = Crypto.DES.decrypt(inputText, passphrase, {mode: new Crypto.mode.OFB(Crypto.pad.pkcs7)});
            }

            if (modeSelected === "ctr" && paddingSelected === "nopadding") {
                output = Crypto.DES.decrypt(inputText, passphrase, {mode: new Crypto.mode.CTR(Crypto.pad.NoPadding)});
            }
            else if (modeSelected === "ctr" && paddingSelected === "zeropadding") {
                output = Crypto.DES.decrypt(inputText, passphrase, {mode: new Crypto.mode.CTR(Crypto.pad.ZeroPadding)});
            }
            else if (modeSelected === "ctr" && paddingSelected === "iso7816") {
                output = Crypto.DES.decrypt(inputText, passphrase, {mode: new Crypto.mode.CTR});
            }
            else if (modeSelected === "ctr" && paddingSelected === "ansix923") {
                output = Crypto.DES.decrypt(inputText, passphrase, {mode: new Crypto.mode.CTR(Crypto.pad.ansix923)});
            }
            else if (modeSelected === "ctr" && paddingSelected === "iso10126") {
                output = Crypto.DES.decrypt(inputText, passphrase, {mode: new Crypto.mode.CTR(Crypto.pad.iso10126)});
            }
            else if (modeSelected === "ctr" && paddingSelected === "pkcs7") {
                output = Crypto.DES.decrypt(inputText, passphrase, {mode: new Crypto.mode.CTR(Crypto.pad.pkcs7)});
            }

            console.log(output);
            outputText.innerHTML = output;
    
        }
        
    }

}

