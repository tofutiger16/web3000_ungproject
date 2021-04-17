/** /
 * change key size is implemented as a button that changes key size from an unordered list
<div class="btn-group">
          <div class="input-group">
            <span class="input-group-addon">Key Size</span>
            <button class="btn btn-default dropdown-toggle" id="key-size" type="button" data-value="1024"
                    data-toggle="dropdown">1024 bit <span class="caret"></span></button>
            <ul class="dropdown-menu">
              <li><a class="change-key-size" data-value="512" href="#">512 bit</a></li>
              <li><a class="change-key-size" data-value="1024" href="#">1024 bit</a></li>
              <li><a class="change-key-size" data-value="2048" href="#">2048 bit</a></li>
              <li><a class="change-key-size" data-value="4096" href="#">4096 bit</a></li>
            </ul>
          </div>
        </div>
/**/

$(".change-key-size").each(function (index, value) {
  var el = $(value);
  var keySize = el.attr('data-value');
  el.click(function (e) {
    var button = $('#key-size');
    button.attr('data-value', keySize);
    button.html(keySize + ' bit <span class="caret"></span>');
    e.preventDefault();
  });
});


//Execute encryption/decryption
$('process-button').click(function () {

    // Create the encryption object.
    var crypt = new JSEncrypt();

    // Set the private.
    crypt.setPrivateKey($('#privkey').val());
    //return;
    // If no public key is set then set it here...
    var pubkey = $('#pubkey').val();
    if (!pubkey) {
      $('#pubkey').val(crypt.getPublicKey());
    }

    // Get the input and crypted values.
    var input = $('#input').val();
    var crypted = $('#crypted').val();

    // Alternate the values.
    if (input) {
      $('#crypted').val(crypt.encrypt(input));
      $('#input').val('');
    }
    else if (crypted) {
      var decrypted = crypt.decrypt(crypted);
      if (!decrypted)
        decrypted = 'This is a test!';
      $('#input').val(decrypted);
      $('#crypted').val('');
    }
  });


var generateKeys = function () {
    var sKeySize = $('#key-size').attr('data-value');
    var keySize = parseInt(sKeySize);
    var crypt = new JSEncrypt({default_key_size: keySize});
    crypt.getKey();
    $('#privkey').val(crypt.getPrivateKey());
    $('#pubkey').val(crypt.getPublicKey());
};

//generate new keys from a button with id generate
$('#generate').click(generateKeys);