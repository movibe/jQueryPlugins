( function ( window, $, undefined ) {
	//Versão
	var VERSION = '1.0';
	var input_valor = "";
	var animacao = 'pulse';
	var require = "";
	var returnValue = true;


	// Valida todos os campos input, select e textarea que estiverem com required
	$.fn.validarFormulario = function () {

		$.each( $( 'input,select,textarea' ), function ( index, val ) {
			require = $( this ).attr( 'required' );
			if ( require == 'required' ) {
				input_valor = $( this ).val().replace( 'R$ ', '' ).replace( '.', '' ).replace( ',', '.' );
				if ( input_valor == '' ) {
					$( this ).addClass( animacao + ' animated' ).one( 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function () {
						$( this ).removeClass( animacao + ' animated' );
						$( this ).focus();
					} );
					console.warn( "require:" + require, "valor:" + input_valor, "index:" + index, val );
					returnValue = false;
					return false;
				};

			};

		} );

		return returnValue;

	}

} )( window, jQuery );