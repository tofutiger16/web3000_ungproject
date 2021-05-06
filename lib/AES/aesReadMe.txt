*****I have updated the following from the last project demonstration submission: 

-Updated the index.html script src from "https://cdnjs.cloudflare.com/ajax/libs/crypto-js/4.0.0/aes.min.js" to 
"https://cdnjs.cloudflare.com/ajax/libs/crypto-js/4.0.0/crypto-js.min.js" (updated my library because all the supported modes and padding werent working), 

-Updated my aes() function to remove repetitiveness for modeSelected since i have a function the determines mode already, 

-Updated The encryption and decryption method from "CryptoJS.AES.encrypt(string, passphrase, "{ mode: "+mode+", padding:"+padding+"");" 
to "CryptoJS.AES.encrypt(string, passphrase, {mode, padding});" (because the mode and padding values were stings)

-Updated the determinMode(string) function (because a string was being returned)

-Updated cbcencrypt(string) function name to determinePadding(string) to align with what the function was doing, which is determining Padding and returning 
the padding method

-Updated determinePadding(string) function (because a string was being returned)

In thencrypt:

So we are using a fileReader api that reads within the browser and we are assigning
new FileReader as FR. We then we assign input with the file that was uploaded document.getElementByID.
input.onchange is an event listener so when input has been changed input.onchange will 
be assigned with the "function(event)" and within that function the File FR will
read the file as text and read the each letter as an array. Once its done reading 
as text within the "function(event)" it will call the onload call back and give us
the result of the file so we can get that result off of the reader once its done 
loading and assign it to fileText.

(asymmetric.js)

In the function aes() I have assigned methodSelected, directionSelected, modeSelected, and cipherPaddindSelected with the
respective values that were chosen by the user. string was also assigned with the input that is entered in the text area 
and passphrase was also assigned with the input given in the passphrase input box.

Then I have an if statement that has if the text area is empty then string will be
assigned with fileText. 

I then have mode and padding assigned with the functions (determineMode() and determinePadding())
that return the padding and mode. 

In the aes() function have if statements that make sure the methodSelected is
"aes" and if true it then executes an embedded if statement that ensures the direction
is encryption is "encrypt" and if the condition is true it will assign output with CryptoJS.AES.encrypt method and also have 
salt = output.salt.toString();that creates salt for encrypted string. If the direction is not encrypt then the
else statement will be ran and assign output with CryptoJS.AES.decrypt.

The encryption and decryption methods contain the message and passphrase entered by the and mode and padding 
that were assigned earlier by determineMode() and determinePadding(). If user chooses CFB the determineMode() function 
will run through if statements to find which mode was selected and then return CFB and assign it to mode.

CryptoJs library was used and it supports supports AES-128, AES-192, and AES-256. Variant will be choosen depending
 on the size of the key and if a passphrase is used it will automatically use AES-256. The library also supports 
 CBC (the default), CFB, CTR, OFB, and ECB as modes. Also suports Pkcs7 (the default), Iso97971, AnsiX923, Iso10126, ZeroPadding, NoPadding