# RSA Encryption/Decryption

## Dependencies

* Bootstrap v3.1.1: http://getbootstrap.com
* jQuery v1.10.2: https://jquery.org/license
* jsencrypt library: https://github.com/travist/jsencrypt
* jsbn: http://www-cs-students.stanford.edu/~tjw/jsbn/

## Files Present
* Within this Folder:
    * <span>README.md</span>: This file!
    * jsencrypt.js: Where jsbn and jsencrypt libraries are merged and used as one
    * RSA_REF.js: driver code for demo RSA HTML webpage
    * RSA-Function: driver code for RSA functions in the project website

## RSA-Function
RSA-Function is the RSA code for the project website and it has two main functions

### function rsa()
This function handles the encryption and decryption aspect of RSA. It takes the user's input and determines if the website is wanting RSA encrypting or decrypting and then determines whether it is encrypting or decrypting the input.

### function generateKeys()
This function handles the generation of public and private RSA keys. The jsencrypt library is capable of key sizes of 512 - 4096 bit.

### function getKeySize()
This function handles the changes of the key size

## Limitations
* The jsencrypt library only uses one type of padding and that is PKCS#1.
* jsencrypt does not have a known encryption mode and does not have any indication of what is being used
* A JSEncrypt object must be initiated for the library to work