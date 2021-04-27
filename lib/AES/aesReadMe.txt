In thencrypt:

So we are using a fileReader api that reads within the browser and we are assigning
new FileReader as FR. We then we assign input with the file that was uploaded document.getElementByID.
input.onchange is an event listener so when input has been changed input.onchange will 
be assigned with the "function(event)" and within that function the File FR will
read the file as text and read the each letter as an array. Once its done reading 
as text within the "function(event)" it will call the onload call back and give us
the result of the file so we can get that result off of the reader once its done 
loading and assign it to fileText.

asymmetric.js 

In the function aes() I have assigned Method selected, direction selected, mode selected, and cipher selected 
with the respective values that was choosen by the user. The string was also assigned with the input that is 
entered in the text area and passphrase was also assigned with the input given in the passphrase input box. Then 
I have an if statement that has if the text area is empty then string will be assigned fileText. Then we have 
mode and padding assigned to functions that determine the padding and mode. Then I have if statements that make sure the modeSelected is 
aes and if true it gives an embeded if statement that make sees if that the direction is encryptition if true it will have more embeded if statements 
that find the mode slected and output an encrypted message.If the direction is not encrypt then the else statement will be ran that has if statement 
decrypt with the right mode and padding.