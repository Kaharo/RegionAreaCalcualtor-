function SaveToFile (dataStripId, debuggingString) {
  var textFile = null,
  makeTextFile = function (xml) {
    var data = new Blob([xml], {type: 'text/kml'});

    // If we are replacing a previously generated file we need to
    // manually revoke the object URL to avoid memory leaks.
    if (textFile !== null) {
      window.URL.revokeObjectURL(textFile);
    }
    textFile = window.URL.createObjectURL(data);
    
    return textFile;
  };


  var create = document.getElementById('create'),
    textbox = document.getElementById('kmlCheck');

  create.addEventListener('click', function () {
    var link = document.createElement('a');
    link.setAttribute('download', dataStripId[0].textContent + '.kml');
    //link.href = makeTextFile(textbox.value);
    link.href = makeTextFile(debuggingString);
    document.body.appendChild(link);

    // wait for the link to be added to the document
    window.requestAnimationFrame(function () {
      var event = new MouseEvent('click');
      link.dispatchEvent(event);
      document.body.removeChild(link);
		});
    
  }, false);
};