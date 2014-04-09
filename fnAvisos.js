( function ( window, $, undefined ) {

	var VERSION = '1.0';

	// Private methods
	var busy = false;

	$.fn.abrirAviso = function () {
		$( '.container' ).addClass( 'blur' );
		$( '.main_content' ).addClass( 'blur' );
		$( '<div id="timeout-loading"></div>' )
			.appendTo( 'body' )
			.dialog( {
				modal: true,
				width: '150px',
				minHeight: 'auto',
				zIndex: 10000,
				closeOnEscape: false,
				draggable: false,
				resizable: false,
				// show: {
				// effect: 'fade',
				// duration: 500
				// },
				hide: {
					effect: 'fade',
					duration: 500
				},
				dialogClass: 'timeout-loading',
				title: '<img src="' + $.cookie( 'URL' ) + 'images/mauser_mini.jpg"><img src="' + $.cookie( 'URL' ) + 'images/loading2.gif" width="100">'

			} );

		// console.warn( "Abrindo Aviso" + this );
	}

	$.fn.fecharAviso = function () {
		if ( $( "#timeout-loading" ).length ) {
			$( '#timeout-loading' ).remove();
			$( '.container' ).removeClass( 'blur' );
			$( '.main_content' ).removeClass( 'blur' );
		}
		// console.warn( "Fechando Aviso" );
	}


} )( window, jQuery );