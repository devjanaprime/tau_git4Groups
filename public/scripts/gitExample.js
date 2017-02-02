var theList = [];

var addToList = function(){
  // get user input and put into an object
  var newItem = {
    name: document.getElementById( 'nameIn' ).value,
    description: document.getElementById( 'descriptionIn' ).value
  }
  // push into list
  theList.push( newItem );
  // empty output
  document.getElementById( 'outputList' ).innerHTML = '';
  var outputString = '';
  // loop through array and add to outputString
  for (var i = 0; i < theList.length; i++) {
    outputString += '<li>' + theList[i].name + ": " + theList[i].description + '</li>';
  } //end for
  // display output
  document.getElementById( 'outputList' ).innerHTML = outputString;
} // end addToList
