function des() {
    let methodSelected = document.getElementById("method");
    let directionSelected = document.getElementById("direction");
    let modeSelected = document.getElementById("mode");
    let paddingSelected = document.getElementById("cipher-padding");
    let passphrase = document.getElementById("passphrase");
    let file = document.getElementById("file-select");
    let inputText = document.getElementById("input-text");
    let outputText = document.getElementById("output-text");

    //let output = "";
    let crypted = "";
    let plain = "";

    if (methodSelected ==="DES") {
        if (directionSelected === "Encrypt") {
            //encrypt
            
            if (modeSelected === "CBC" && paddingSelected === "No Padding") {
                crypted = Crypto.DES.encrypt(inputText, passphrase, {mode: new Crypto.mode.CBC(Crypto.pad.NoPadding)});
            }
            else if (modeSelected === "CBC" && paddingSelected === "Zero Padding") {
                crypted = Crypto.DES.encrypt(inputText, passphrase, {mode: new Crypto.mode.CBC(Crypto.pad.ZeroPadding)});
            }
            else if (modeSelected === "CBC" && paddingSelected === "ISO7816") {
                crypted = Crypto.DES.encrypt(inputText, passphrase, {mode: new Crypto.mode.CBC});
            }
            else if (modeSelected === "CBC" && paddingSelected === "ANSI X9.23") {
                crypted = Crypto.DES.encrypt(inputText, passphrase, {mode: new Crypto.mode.CBC(Crypto.pad.ansix923)});
            }
            else if (modeSelected === "CBC" && paddingSelected === "ISO 10126") {
                crypted = Crypto.DES.encrypt(inputText, passphrase, {mode: new Crypto.mode.CBC(Crypto.pad.iso10126)});
            }
            else if (modeSelected === "CBC" && paddingSelected === "PKCS#7") {
                crypted = Crypto.DES.encrypt(inputText, passphrase, {mode: new Crypto.mode.CBC(Crypto.pad.pkcs7)});
            }

            if (modeSelected === "ECB" && paddingSelected === "No Padding") {
                crypted = Crypto.DES.encrypt(inputText, passphrase, {mode: new Crypto.mode.ECB(Crypto.pad.NoPadding)});
            }
            else if (modeSelected === "ECB" && paddingSelected === "Zero Padding") {
                crypted = Crypto.DES.encrypt(inputText, passphrase, {mode: new Crypto.mode.ECB(Crypto.pad.ZeroPadding)});
            }
            else if (modeSelected === "ECB" && paddingSelected === "ISO7816") {
                crypted = Crypto.DES.encrypt(inputText, passphrase, {mode: new Crypto.mode.ECB});
            }
            else if (modeSelected === "ECB" && paddingSelected === "ANSI X9.23") {
                crypted = Crypto.DES.encrypt(inputText, passphrase, {mode: new Crypto.mode.ECB(Crypto.pad.ansix923)});
            }
            else if (modeSelected === "ECB" && paddingSelected === "ISO 10126") {
                crypted = Crypto.DES.encrypt(inputText, passphrase, {mode: new Crypto.mode.ECB(Crypto.pad.iso10126)});
            }
            else if (modeSelected === "ECB" && paddingSelected === "PKCS#7") {
                crypted = Crypto.DES.encrypt(inputText, passphrase, {mode: new Crypto.mode.ECB(Crypto.pad.pkcs7)});
            }

            if (modeSelected === "CFB" && paddingSelected === "No Padding") {
                crypted = Crypto.DES.encrypt(inputText, passphrase, {mode: new Crypto.mode.CFB(Crypto.pad.NoPadding)});
            }
            else if (modeSelected === "CFB" && paddingSelected === "Zero Padding") {
                crypted = Crypto.DES.encrypt(inputText, passphrase, {mode: new Crypto.mode.CFB(Crypto.pad.ZeroPadding)});
            }
            else if (modeSelected === "CFB" && paddingSelected === "ISO7816") {
                crypted = Crypto.DES.encrypt(inputText, passphrase, {mode: new Crypto.mode.CFB});
            }
            else if (modeSelected === "CFB" && paddingSelected === "ANSI X9.23") {
                crypted = Crypto.DES.encrypt(inputText, passphrase, {mode: new Crypto.mode.CFB(Crypto.pad.ansix923)});
            }
            else if (modeSelected === "CFB" && paddingSelected === "ISO 10126") {
                crypted = Crypto.DES.encrypt(inputText, passphrase, {mode: new Crypto.mode.CFB(Crypto.pad.iso10126)});
            }
            else if (modeSelected === "CFB" && paddingSelected === "PKCS#7") {
                crypted = Crypto.DES.encrypt(inputText, passphrase, {mode: new Crypto.mode.CFB(Crypto.pad.pkcs7)});
            }

            if (modeSelected === "OFB" && paddingSelected === "No Padding") {
                crypted = Crypto.DES.encrypt(inputText, passphrase, {mode: new Crypto.mode.OFB(Crypto.pad.NoPadding)});
            }
            else if (modeSelected === "OFB" && paddingSelected === "Zero Padding") {
                crypted = Crypto.DES.encrypt(inputText, passphrase, {mode: new Crypto.mode.OFB(Crypto.pad.ZeroPadding)});
            }
            else if (modeSelected === "OFB" && paddingSelected === "ISO7816") {
                crypted = Crypto.DES.encrypt(inputText, passphrase, {mode: new Crypto.mode.OFB});
            }
            else if (modeSelected === "OFB" && paddingSelected === "ANSI X9.23") {
                crypted = Crypto.DES.encrypt(inputText, passphrase, {mode: new Crypto.mode.OFB(Crypto.pad.ansix923)});
            }
            else if (modeSelected === "OFB" && paddingSelected === "ISO 10126") {
                crypted = Crypto.DES.encrypt(inputText, passphrase, {mode: new Crypto.mode.OFB(Crypto.pad.iso10126)});
            }
            else if (modeSelected === "OFB" && paddingSelected === "PKCS#7") {
                crypted = Crypto.DES.encrypt(inputText, passphrase, {mode: new Crypto.mode.OFB(Crypto.pad.pkcs7)});
            }

            if (modeSelected === "CTR" && paddingSelected === "No Padding") {
                crypted = Crypto.DES.encrypt(inputText, passphrase, {mode: new Crypto.mode.CTR(Crypto.pad.NoPadding)});
            }
            else if (modeSelected === "CTR" && paddingSelected === "Zero Padding") {
                crypted = Crypto.DES.encrypt(inputText, passphrase, {mode: new Crypto.mode.CTR(Crypto.pad.ZeroPadding)});
            }
            else if (modeSelected === "CTR" && paddingSelected === "ISO7816") {
                crypted = Crypto.DES.encrypt(inputText, passphrase, {mode: new Crypto.mode.CTR});
            }
            else if (modeSelected === "CTR" && paddingSelected === "ANSI X9.23") {
                crypted = Crypto.DES.encrypt(inputText, passphrase, {mode: new Crypto.mode.CTR(Crypto.pad.ansix923)});
            }
            else if (modeSelected === "CTR" && paddingSelected === "ISO 10126") {
                crypted = Crypto.DES.encrypt(inputText, passphrase, {mode: new Crypto.mode.CTR(Crypto.pad.iso10126)});
            }
            else if (modeSelected === "CTR" && paddingSelected === "PKCS#7") {
                crypted = Crypto.DES.encrypt(inputText, passphrase, {mode: new Crypto.mode.CTR(Crypto.pad.pkcs7)});
            }

            outputText.innerHTML = crypted;

        }

        else {
            //decrypt

            crypted = inputText;

            if (modeSelected === "CBC" && paddingSelected === "No Padding") {
                plain = Crypto.DES.decrypt(crypted, passphrase, {mode: new Crypto.mode.CBC(Crypto.pad.NoPadding)});
            }
            else if (modeSelected === "CBC" && paddingSelected === "Zero Padding") {
                plain = Crypto.DES.decrypt(crypted, passphrase, {mode: new Crypto.mode.CBC(Crypto.pad.ZeroPadding)});
            }
            else if (modeSelected === "CBC" && paddingSelected === "ISO7816") {
                plain = Crypto.DES.decrypt(crypted, passphrase, {mode: new Crypto.mode.CBC});
            }
            else if (modeSelected === "CBC" && paddingSelected === "ANSI X9.23") {
                plain = Crypto.DES.decrypt(crypted, passphrase, {mode: new Crypto.mode.CBC(Crypto.pad.ansix923)});
            }
            else if (modeSelected === "CBC" && paddingSelected === "ISO 10126") {
                plain = Crypto.DES.decrypt(crypted, passphrase, {mode: new Crypto.mode.CBC(Crypto.pad.iso10126)});
            }
            else if (modeSelected === "CBC" && paddingSelected === "PKCS#7") {
                plain = Crypto.DES.decrypt(crypted, passphrase, {mode: new Crypto.mode.CBC(Crypto.pad.pkcs7)});
            }

            if (modeSelected === "ECB" && paddingSelected === "No Padding") {
                plain = Crypto.DES.decrypt(crypted, passphrase, {mode: new Crypto.mode.ECB(Crypto.pad.NoPadding)});
            }
            else if (modeSelected === "ECB" && paddingSelected === "Zero Padding") {
                plain = Crypto.DES.decrypt(crypted, passphrase, {mode: new Crypto.mode.ECB(Crypto.pad.ZeroPadding)});
            }
            else if (modeSelected === "ECB" && paddingSelected === "ISO7816") {
                plain = Crypto.DES.decrypt(crypted, passphrase, {mode: new Crypto.mode.ECB});
            }
            else if (modeSelected === "ECB" && paddingSelected === "ANSI X9.23") {
                plain = Crypto.DES.decrypt(crypted, passphrase, {mode: new Crypto.mode.ECB(Crypto.pad.ansix923)});
            }
            else if (modeSelected === "ECB" && paddingSelected === "ISO 10126") {
                plain = Crypto.DES.decrypt(crypted, passphrase, {mode: new Crypto.mode.ECB(Crypto.pad.iso10126)});
            }
            else if (modeSelected === "ECB" && paddingSelected === "PKCS#7") {
                plain = Crypto.DES.decrypt(crypted, passphrase, {mode: new Crypto.mode.ECB(Crypto.pad.pkcs7)});
            }

            if (modeSelected === "CFB" && paddingSelected === "No Padding") {
                plain = Crypto.DES.decrypt(crypted, passphrase, {mode: new Crypto.mode.CFB(Crypto.pad.NoPadding)});
            }
            else if (modeSelected === "CFB" && paddingSelected === "Zero Padding") {
                plain = Crypto.DES.decrypt(crypted, passphrase, {mode: new Crypto.mode.CFB(Crypto.pad.ZeroPadding)});
            }
            else if (modeSelected === "CFB" && paddingSelected === "ISO7816") {
                plain = Crypto.DES.decrypt(crypted, passphrase, {mode: new Crypto.mode.CFB});
            }
            else if (modeSelected === "CFB" && paddingSelected === "ANSI X9.23") {
                plain = Crypto.DES.decrypt(crypted, passphrase, {mode: new Crypto.mode.CFB(Crypto.pad.ansix923)});
            }
            else if (modeSelected === "CFB" && paddingSelected === "ISO 10126") {
                plain = Crypto.DES.decrypt(crypted, passphrase, {mode: new Crypto.mode.CFB(Crypto.pad.iso10126)});
            }
            else if (modeSelected === "CFB" && paddingSelected === "PKCS#7") {
                plain = Crypto.DES.decrypt(crypted, passphrase, {mode: new Crypto.mode.CFB(Crypto.pad.pkcs7)});
            }

            if (modeSelected === "OFB" && paddingSelected === "No Padding") {
                plain = Crypto.DES.decrypt(crypted, passphrase, {mode: new Crypto.mode.OFB(Crypto.pad.NoPadding)});
            }
            else if (modeSelected === "OFB" && paddingSelected === "Zero Padding") {
                plain = Crypto.DES.decrypt(crypted, passphrase, {mode: new Crypto.mode.OFB(Crypto.pad.ZeroPadding)});
            }
            else if (modeSelected === "OFB" && paddingSelected === "ISO7816") {
                plain = Crypto.DES.decrypt(crypted, passphrase, {mode: new Crypto.mode.OFB});
            }
            else if (modeSelected === "OFB" && paddingSelected === "ANSI X9.23") {
                plain = Crypto.DES.decrypt(crypted, passphrase, {mode: new Crypto.mode.OFB(Crypto.pad.ansix923)});
            }
            else if (modeSelected === "OFB" && paddingSelected === "ISO 10126") {
                plain = Crypto.DES.decrypt(crypted, passphrase, {mode: new Crypto.mode.OFB(Crypto.pad.iso10126)});
            }
            else if (modeSelected === "OFB" && paddingSelected === "PKCS#7") {
                plain = Crypto.DES.decrypt(crypted, passphrase, {mode: new Crypto.mode.OFB(Crypto.pad.pkcs7)});
            }

            if (modeSelected === "CTR" && paddingSelected === "No Padding") {
                plain = Crypto.DES.decrypt(crypted, passphrase, {mode: new Crypto.mode.CTR(Crypto.pad.NoPadding)});
            }
            else if (modeSelected === "CTR" && paddingSelected === "Zero Padding") {
                plain = Crypto.DES.decrypt(crypted, passphrase, {mode: new Crypto.mode.CTR(Crypto.pad.ZeroPadding)});
            }
            else if (modeSelected === "CTR" && paddingSelected === "ISO7816") {
                plain = Crypto.DES.decrypt(crypted, passphrase, {mode: new Crypto.mode.CTR});
            }
            else if (modeSelected === "CTR" && paddingSelected === "ANSI X9.23") {
                plain = Crypto.DES.decrypt(crypted, passphrase, {mode: new Crypto.mode.CTR(Crypto.pad.ansix923)});
            }
            else if (modeSelected === "CTR" && paddingSelected === "ISO 10126") {
                plain = Crypto.DES.decrypt(crypted, passphrase, {mode: new Crypto.mode.CTR(Crypto.pad.iso10126)});
            }
            else if (modeSelected === "CTR" && paddingSelected === "PKCS#7") {
                plain = Crypto.DES.decrypt(crypted, passphrase, {mode: new Crypto.mode.CTR(Crypto.pad.pkcs7)});
            }
    
            outputText.innerHTML = plain;
    
        }
        
    }

}

