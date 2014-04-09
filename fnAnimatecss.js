( function ( window, $, undefined ) {
	//Versão
	var VERSION = '1.0';

	// Funções
	$.fn.animar = function ( animacao ) {
		$( this ).addClass( animacao + ' animated' ).one( 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function () {
			$( this ).removeClass( animacao + ' animated' );
			$( this ).focus();
		} );
	}

} )( window, jQuery );