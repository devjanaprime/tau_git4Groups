var theList = [];

var addToList = function(){
  theList.push( document.getElementById( 'nameIn' ).value );
  document.getElementById( 'outputList' ).innerHTML = '';
  var outputString = '';
  for (var i = 0; i < theList.length; i++) {
    outputString += '<li>' + theList[i] + '</li>';
  } //end for
  document.getElementById( 'outputList' ).innerHTML = outputString;
} // end addToList
