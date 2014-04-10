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
	 * $(obj).animateCSS();
	 * $(obj).animateCSS('amimacao' : 'pulse');
	 *
	 */

	// Function
	$.fn.animateCSS = function ( parametros ) {

		var parametrosPadrao = {
			'animacao': 'pulse'
		};

		// Mescla os parametros 
		parametros = $.extend( parametrosPadrao, parametros );


		$( this ).addClass( parametros.animacao + ' animated' ).one( 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function () {
			$( this ).removeClass( parametros.animacao + ' animated' );
			$( this ).focus();
		} );
	}

} )( window, jQuery );