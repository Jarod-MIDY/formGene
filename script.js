//JMI label code no css
function boutonLabel() {
  $('#droite').append('<div id="add-label"></div>');
  $('#add-label').append('<p>Texte du label :</p>').append('<input id="label-val" type="text" name="" value="">').append('<button onclick="okLabel()">Ok</button>');
  $('#label-btn').prop('disabled', true);
}
function okLabel() {
  let valLab = $('#label-val').val();
  if (valLab) {
    $('#gauche').append('<span>' + valLab + ' </span>');
  }
  $('#add-label').remove();
  $('#label-btn').prop('disabled', false);
}

