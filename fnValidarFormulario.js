( function ( window, $, undefined ) {

	/**
	 * validarFormulario
	 *
	 * @author Willian Ribeiro Angelo <willian.ribeiro.angelo@gmail.com>
	 * @package jQueryPlugin
	 */

	//Versão
	var VERSION = '1.0';
	var input_valor = "";
	// Animação usando AnimateCSS
	var animacao = 'pulse';
	var require = "";
	var returnValue = true;


	// Valida todos os campos input, select e textarea que estiverem com required
	$.fn.validarFormulario = function () {

		// Passo em todos os Inputs, Selects e Textarea 
		$.each( $( 'input,select,textarea' ), function ( index, val ) {
			// Pego apenas os que tem a propriedade required
			require = $( this ).attr( 'required' );
			// Verifico se está flegado como obrigatório = required
			if ( require == 'required' ) {
				// Pego o valor do campo e caso tenha formato moeda, elimino a formatação
				input_valor = $( this ).val().replace( 'R$ ', '' ).replace( '.', '' ).replace( ',', '.' );
				// Pego apenas os que estão com valores em branco
				if ( input_valor == '' ) {
					// Caso esteja em branco, coloco uma animação adicionando um class do AnimateCSS
					$( this ).addClass( animacao + ' animated' ).one( 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function () {
						// No fim da animação removo a classe
						$( this ).removeClass( animacao + ' animated' );
						// Dou um foco no campo para pessoa pode preencher
						$( this ).focus();
					} );
					// console.warn( "require:" + require, "valor:" + input_valor, "index:" + index, val );
					// Retorno Falso 
					returnValue = false;
					return false;
				};

			};

		} );
		// Se todos os campos estiverem preenchido, retorno TRUE 
		return returnValue;
	}

} )( window, jQuery );