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
			"slug": "koba",
			"imagem":"koba.png"
		},
		{
			"nome":"ciro",
			"slug": "ciro",
			"imagem":"ciro.png"
		},
		{
			"nome":"galpao",
			"slug": "galpao",
			"imagem":"galpao.png"
		},
		{
			"nome":"vegas",
			"slug": "vegas",
			"imagem":"vegas.png"
		},
		{
			"nome":"koba",
			"slug": "koba",
			"imagem":"koba.png"
		},
		{
			"nome":"ciro",
			"slug": "ciro",
			"imagem":"ciro.png"
		},
		{
			"nome":"galpao",
			"slug": "galpao",
			"imagem":"galpao.png"
		},
		{
			"nome":"vegas",
			"slug": "vegas",
			"imagem":"vegas.png"
		},
		{
			"nome":"koba",
			"slug": "koba",
			"imagem":"koba.png"
		},
		{
			"nome":"ciro",
			"slug": "ciro",
			"imagem":"ciro.png"
		},
		{
			"nome":"galpao",
			"slug": "galpao",
			"imagem":"galpao.png"
		},
		{
			"nome":"vegas",
			"slug": "vegas",
			"imagem":"vegas.png"
		}
	]
  }

})();
