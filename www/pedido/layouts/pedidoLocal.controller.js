(function(){
  'use strict';

  angular
    .module('app.pedido')
    .controller('PedidoLocalController', PedidoLocalController);

  function PedidoLocalController($state) {
    let vm = this;
    let slug = $state.params.slug;
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
		}
	]

	vm.search = function(){
		for (var i = 0; i < vm.lanchonetes.length; i++) {
			if(vm.lanchonetes[i].slug == slug){
				vm.lanchonete = vm.lanchonetes[i];
			}
		}
	}
	vm.search();
  }

})();
