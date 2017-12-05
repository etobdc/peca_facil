(function(){
  'use strict';

  angular
    .module('app.pedido')
    .controller('PedidoController', PedidoController);

  function PedidoController() {
    let vm = this;
	vm.lanchonetes = [
		{
			"nome":"koba",
			"imagem":"koba.png"
		},
		{
			"nome":"koba",
			"imagem":"koba.png"
		},
		{
			"nome":"koba",
			"imagem":"koba.png"
		},
		{
			"nome":"koba",
			"imagem":"koba.png"
		},
		{
			"nome":"koba",
			"imagem":"koba.png"
		},
		{
			"nome":"koba",
			"imagem":"koba.png"
		},
		{
			"nome":"koba",
			"imagem":"koba.png"
		},
		{
			"nome":"koba",
			"imagem":"koba.png"
		},
		{
			"nome":"koba",
			"imagem":"koba.png"
		}
	]
  }

})();
