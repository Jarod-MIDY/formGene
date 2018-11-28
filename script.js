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
  $('.label-span').css({"padding":"10px","font-size":"1.5em","display":"inline-block"});
  $('#add-label').remove();
  $('#label-btn').prop('disabled', false);
}

