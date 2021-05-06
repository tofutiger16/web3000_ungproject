The Crypt
Group Memebers: Jairo Cuevas, Cody Jones, Taylor Hitt, Zachary DeMoss, Jake Elder


## Startup Instructions:

1. Download the repository (either git clone or download the zip file)
2. Open Command prompt or terminal and navigate to the web3000_project folder
3. Start a Python HTTP Server
4. Start a chromium based or firefox based browser
5. navigate to localhost:port(check command prompt for the port, default 8000)
6. Start using the webapp


GENERAL

This web application is designed to allow for average users access to powerful
encryption and decryption tools.  The web app uses four different encryption methods
including two block encryption methods: AES, and DES; a public key encryption method:
RSA; and a stream cypher encryption method: Rabbit.

The web app uses thecrypt.js file as a wrapper JavaScript file to call the encryption/decryption
functions included in different JavaScript files as well as allow for files to
be directly uploaded for encryption/decryption and to create an output file
if the user chooses to output to a downloadable file in addition to outputting
to a copy and paste-able textbox. The web app achieves simplicity of use by limiting
the encryption options to only those necessary for the specific encryption/decryption
method selected. A loading circle was added to inform the user that data is being processed. 
There is a timeout on the loading circle to still give that visual processing feedback to the user 
if the processing does not take much time at all, to establish a consistent expectation they 
may have when using the page.

The fileReader API that reads within the browser and is assigning a new FileReader. Then input
is assigned with the file that was uploaded. The onchange event is an event listener
that will allow input to be parsed. The File reader will read the file as text and
read the each letter as an array. Once its done reading as text within the
"function(event)" it will call the onload call back and give the result of the file
once its done loading and assign it to fileText.

The user can download their file through the use of Blob object. This circumvents Javascript's
inability to create files on the client side and prevents a NodeJS implementation. A Blob
object is holds a 'type' string and an array of 'blobParts'. The data from the output textarea 
is then added to the Blob as its blobparts. After checking whether a file exists,
the previously created blob is removed and/or a new URL object pointing to the Blob is created.
The file is then available for download via clicking the photo that appears after creating the 
file.

The styling for the site was inspired by a play on words with a crypt, as in a chamber
often housing the dead, and encrypt/decrypt and the increasingly popular Dracula theme 
(more information available at https://draculatheme.com/). Continuing in the spooky theme 
a custom font was added to the site for the main header that has the letters appear as ghost 
characters. The layout of the page was designed to allow for a chronological flow through the 
steps of encrypting or decrypting data.

It is important to note that during the developoment of this web app that a python HTTP server 
was used during testing. The webapp has only been tested in chromium based browsers(Chrome, 
Brave) and Firefox browsers.

AES

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
is encryption is "encrypt" and if the condition is true it will assign output with CryptoJS.AES.encrypt 
method and also have salt = output.salt.toString();that creates salt for encrypted string. If the direction is not encrypt then the
else statement will be ran and assign output with CryptoJS.AES.decrypt.

The encryption and decryption methods contain the message and passphrase entered by the and mode and padding 
that were assigned earlier by determineMode() and determinePadding(). If user chooses CFB the determineMode() function 
will run through if statements to find which mode was selected and then return CFB and assign it to mode.

CryptoJs library was used and it supports supports AES-128, AES-192, and AES-256. Variant will be choosen depending on 
the size of the key and if a passphrase is used it will automatically use AES-256. The library also supports 
CBC (the default), CFB, CTR, OFB, and ECB as modes. Also suports Pkcs7 (the default), Iso97971, AnsiX923, Iso10126, ZeroPadding, NoPadding.

DES

The function des() starts and all the variables are declared and assigned their
respective value from the html page.  Then we use an if statement to see if des is
selected on the html page. After that we look to see if encryption or if decryption is
selected.  Finally, we use if and else if statements to see what mode and what padding
should be used.  Then to output the text I modify the innerHTML property of the
output text area.

The library that I used was Crypto.js 2.5.3.  The file that I used was
crypto-sha1-hmac-pbkdf2-blockmodes-des.js.  In that file I use the two functions at
the end named encrypt and decrypt.  Those function use other variable that are
declared near the top of the file and that helps you choose the mode and padding.


RABBIT

The rabbit-encryption.js file utilizes the rabbit rollup in the CryptoJS project,
and is written in pure JavaScript.
The Rabbit-encryption file consists of two main portions, the rabbit function which
assigns the HTML elements, calls the CryptoJS algorithms, and outputs the encrypted/
decrypted data to the text area; and the second portion which checks that the user
input is valid including a valid rabbit key of 128 bytes or less.  The checkInput
function returns a boolean which if false will prevent the rabbit algorithm from
being called.

The CryptoJS library for rabbit encryption/decryption is substantial and only requires
calling the functions.  No additional modifications were required for implementation.


RSA

Dependencies

* Bootstrap v3.1.1: http://getbootstrap.com
* jQuery v1.10.2: https://jquery.org/license
* jsencrypt library: https://github.com/travist/jsencrypt
* jsbn: http://www-cs-students.stanford.edu/~tjw/jsbn/

Files Present
* Within this Folder:
    * <span>README.md</span>: This file!
    * jsencrypt.js: Where jsbn and jsencrypt libraries are merged into one 
      file(it is important to note this is present for offline use only. The webapp uses a cdn.)
    * RSA_REF.js: driver code for demo RSA HTML webpage
    * RSA-Function: driver code for RSA functions in the project website

RSA-Function
RSA-Function is the RSA code for the project website and it has four main functions

function rsa()
This function handles the encryption and decryption aspect of RSA. It takes the
user's input and determines if the website is wanting RSA encrypting or decrypting
and then determines whether it is encrypting or decrypting the input.

### function RSAvalidInput()
This function is dedicated to limiting file size and to check if the userInput lacks data or a file input.

function generateKeys()
This function handles the generation of public and private RSA keys. The jsencrypt
library is capable of key sizes of 512 - 4096 bit.

function getKeySize()
This function handles the changes of the key size

Limitations
* The jsencrypt library only uses one type of padding and that is PKCS#1.
* jsencrypt does not have a known encryption mode and does not have any indication
  of what is being used
* A JSEncrypt object must be initiated for the library to work
