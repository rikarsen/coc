function getClanInfo(clanID){
  $.get( '/main/' + '90LJ2QUP', function( data ) {
  	if (data === false) {
  		$( '.result' ).html( 'Oh no! something went wrong' );
  	} else {
      let formatter = new JSONFormatter(JSON.parse( data ));
      $( '.result' ).html( formatter.render() );
  	}
  });
}