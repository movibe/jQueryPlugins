( function ( window, $, undefined ) {
	/**
	 * animateCSS
	 *
	 * @author Willian Ribeiro Angelo <willian.ribeiro.angelo@gmail.com>
	 * @package jQueryPlugin
	 *
	 *
	 * Adicione o Animate CSS:
	 * http://daneden.github.io/animate.css/
	 *
	 * Adicione este Arquivo no seu Projeto
	 *
	 * Como Usar:
	 * $(obj).animateCSS('pulse');
	 *
	 */


	//Versão
	var VERSION = '1.0';

	// Funções
	$.fn.animateCSS = function ( animacao ) {
		$( this ).addClass( animacao + ' animated' ).one( 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function () {
			$( this ).removeClass( animacao + ' animated' );
			$( this ).focus();
		} );
	}

} )( window, jQuery );