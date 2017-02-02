// requires
var express = require( 'express' );
var app = express();
var path = require( 'path' );
var bodyParser = require( 'body-parser' );
var port = process.env.PORT || 3456;

// uses
app.use( express.static( 'public' ) );
app.use( bodyParser.urlencoded( { extended: true } ) );

app.listen( port, function(){
  console.log( 'listening on:', port );
});

app.get( '/', function( req, res ){
  console.log( 'base route hit' );
  res.sendFile( path.resolve( 'public/views/index.html' ) );
});
