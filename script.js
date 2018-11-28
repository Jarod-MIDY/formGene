//JMI label code
function boutonLabel() {
  $('#droite').append('<div id="add-label"></div>');
  $('#add-label').css({"border-top": "1px solid black","margin-top":"15px"});
  $('#add-label').append('<p>Texte du label :</p>').append('<input id="label-val" type="text" name="" value="">').append('<button onclick="okLabel()">Ok</button>');
  $('#label-btn').prop('disabled', true);
}
function okLabel() {
  let valLab = $('#label-val').val();
  if (valLab) {
    $('#gauche').append('<span class="label-span">' + valLab + ' </span>');
  }
  $('.label-span').css({"padding":"1em","display":"inline-block"});
  $('#add-label').remove();
  $('#label-btn').prop('disabled', false);
}

// JCH input button form
$('#text-input-button').on('click', function() {

  var textInputForm = $('<form id="text-input-form"></form>');

  textInputForm.append($('<label>id de la zone texte</label>'));
  textInputForm.append($('<input type="text">'));
  textInputForm.append($('<button>ok</button>'));

  $('#droite').append(textInputForm);

  textInputForm.css({

    'margin-top': '2em',
    'padding': '1em',
    'border-top': '2px solid black'
  });

  $('#text-input-form *').css({ 'margin': '0.25em' });

  $(this).attr('disabled', 'true');

  $('#text-input-form input').focus();

  $('#text-input-form button').on('click', TextInputFormFunctions.addTextInput);
});

var TextInputFormFunctions = {

  addTextInput: function(e) {

    e.preventDefault();

    var inputValue = $('#text-input-form input').val();

    if(!inputValue) {

      alert('Please, input a value for the text input id');

      $('#text-input-form input').focus();

      return;
    }

    $('#gauche').append('<input id="' + inputValue + '" type="text">');

    $('#' + inputValue).css({

      'display': 'inline-block',
      'margin': '1em'
    });

    $('#text-input-button').removeAttr('disabled');

    $('#text-input-form').remove();
  }
};
